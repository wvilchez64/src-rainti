const express = require('express'); 
const cors = require('cors');
const app = express(); 

const origin = setup.origin;
var whitelist = JSON.stringify(origin.urls);

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {  
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE'
}
app.use(cors(corsOptions));

app.set('port', process.env.PORT || setup.node.port);

const bodyParser = require('body-parser'); 

app.use('/static', express.static(setup.paths.public));

app.use(bodyParser.urlencoded({                       
  extended: true                                    
}));

const authentication = require(setup.paths.config + 'authentication.js');
authentication(app);

const routes = require(setup.paths.routes + 'routes.js'); 
routes(app); 
  
module.exports = app; 