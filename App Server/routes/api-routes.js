const express =  require('express')
const login = require ('./system-access/login/api')
const recover = require ('./system-access/password-recover/api')
const reset = require ('./system-access/password-reset/api')
const administration = require ('./system-access/administration/api')
const common = require ('./common/api')
const detran = require ('./entities/detran/api')

const app = express()

// SYSTEM ACCESS
app.use('/login', login)
app.use('/recover-password', recover)
app.use('/reser-password', reset)
app.use('/administration', administration)


// COMMON
app.use('/common', common)

// ENTITIES
app.use('/detran', detran )


module.exports = app