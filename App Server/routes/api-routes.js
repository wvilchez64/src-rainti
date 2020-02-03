const express =  require('express')
const login = require ('./system-access/login/api')
const recover = require ('./system-access/password-recover/api')
const reset = require ('./system-access/password-reset/api')
const register = require ('./system-access/register/api')
const common = require ('./common/api')
const detran = require ('./entities/detran/api')
const creditor = require ('./entities/creditor/api')
const creditorGroup = require ('./entities/creditor-group/api')
const contract = require ('./contract-register/api')


const app = express()

// SYSTEM ACCESS
app.use('/login', login)
app.use('/recover-password', recover)
app.use('/reser-password', reset)
app.use('/register-user', register)

// COMMON
app.use('/common', common)
 
// ENTITIES
app.use('/detran', detran )
app.use('/creditor', creditor )
app.use('/creditor-group', creditorGroup )

// CONTRACT
app.use('/contract-register', contract )



module.exports = app