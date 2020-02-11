const express =  require('express')
const login = require ('./system-access/login/api')
const administration = require ('./system-access/administration/api')
const recover = require ('./system-access/password-recover/api')
const reset = require ('./system-access/password-reset/api')
const common = require ('./common/api')
const detran = require ('./entities/detran/api')
const creditor = require ('./entities/creditor/api')
const creditorGroup = require ('./entities/creditor-group/api')
const contract = require ('./contract-register/api')
const home = require('./home/api')


const app = express()

// SYSTEM ACCESS
app.use('/login', login)
app.use('/recover-password', recover)
app.use('/reset-password', reset)
app.use('/administration', administration )

// COMMON
app.use('/common', common)
 
// ENTITIES
app.use('/detran', detran )
app.use('/creditor', creditor )
app.use('/creditor-group', creditorGroup )

// CONTRACT
app.use('/contract-register', contract )

// HOME
app.use('/home', home )


module.exports = app