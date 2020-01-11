const express =  require('express')
const queries = require('../model/system-access/password-reset/queries')

const router = express.Router()

router.post('/reset-password', queries.resetPassword)

module.exports = router