const express =  require('express')
const queries = require('../model/system-access/login/queries')
const login = require ('./system-access/login/api')

const app = express()

app.use('/login', login)

module.exports = router