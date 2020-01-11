const express =  require('express')
const queries = require('../model/system-access/register/queries')

const router = express.Router()

router.post('/register', queries.createUser)

module.exports = router