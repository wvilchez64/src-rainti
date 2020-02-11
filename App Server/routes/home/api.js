const express =  require('express')
const queries = require('../../model/home/queries')
const jwt = require('../common/jwt-validation')
const router = express.Router()

// GETs
router.get('/user-group-features', jwt.verifyToken, queries.getUserGroupFeatures)

module.exports = router