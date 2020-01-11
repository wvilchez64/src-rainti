const express =  require('express')
const queries = require('../../../model/system-access/password-recover/queries')

const router = express.Router()

router.post('/recover', queries.recoverPassword)

module.exports = router