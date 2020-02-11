const express =  require('express')
const queries = require('../../../model/system-access/login/queries')

const router = express.Router()

router.post('/access', queries.loginUser)
router.get('/access-features', queries.getUserRoutes)

module.exports = router