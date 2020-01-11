const express =  require('express')
const queries = require('../model/system-access/login/queries')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/login', queries.loginUser)

module.exports = router