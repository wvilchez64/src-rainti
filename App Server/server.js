const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jsonDataServer = require ('./config/config-server.json')
const api = require ('./routes/api-routes')

const port = jsonDataServer.port
const host = jsonDataServer.host

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use('/api',api)

app.get('/', function(req,res){
    res.send('Hello Server')
})

app.listen(port, host, function(){
    console.log('Server is running on '+host+':'+port)
}) 