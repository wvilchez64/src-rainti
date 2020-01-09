global.rootLevel = __dirname + "/";
global.srcConfig = rootLevel + 'src/config/';
global.srcApp = rootLevel + 'src/app/';
global.setup = require(srcApp + "setup.js");

const app = require(srcConfig + "init.js");
var port = app.get('port');

app.listen(port, () => console.log('working on ' + port));
