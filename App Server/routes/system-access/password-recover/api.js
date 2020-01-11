const express =  require('express')
const queries = require('../model/system-access/password-recover/queries')

const router = express.Router()

router.post('/recover-password', queries.recoverPassword)

module.exports = router