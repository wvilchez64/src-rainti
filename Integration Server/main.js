const http = require('http')
const jsonDataServer = require ('./config/config-server.json')
const detranRoute = require('./routes/detranRoute')
//const cors = require('cors')
//const api = require ('./routes/api-routes')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = jsonDataServer.port
const host = jsonDataServer.host
//const controller = require('.controller/api')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());//
app.use(express.json());

app.use('/apiDetran',detranRoute);
app.get('/', function(req,res){res.send('Integration Server Activated, is running on http://' + host + ':' + port);})//resposta padrao ao acessar o ip via browser
//app.listen(port, host, function(){console.clear();console.log('Integration Server Activated, is running on http://' + host + ':' + port);});//inicializa servidor

//caso nao encontre nenhuma rota retorna 404
app.use(function (request,response,next){response.status(404).send('Entre em contato com o administrador de sistemas.');});
app.use(function (error,request,response,next){response.status(500).json({error})});

app.listen(port,function(){  
    console.clear();
    console.log("\nServidor no ar porta:   http://localhost:" + port + "\n");

    var date = new Date();     /*a new date*/
    var time = date.getTime(); /*the timestamp, not neccessarely using UTC as current time*/
    var julian_day =  Math.floor((time / 86400000) - (date.getTimezoneOffset()/1440) + 2440587.5);
    var julian_date = Math.floor((time / 86400000) - (date.getTimezoneOffset()/1440) + 2440587.5);
});

/*
app.use(cors())
app.use('/api',api)

app.get('/', function(req,res){
    res.send('Integration Server Activated')
})
*/