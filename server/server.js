const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const port = 3000
const host = '127.0.0.1'
const api = require('./routes/api')
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