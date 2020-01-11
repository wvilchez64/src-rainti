const express =  require('express')
const login = require ('./system-access/login/api')

const app = express()

app.use('/login', login)

module.exports = app