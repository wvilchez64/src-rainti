const express =  require('express')
const queries = require('../model/queries')
const email = require('../common/mailing')

const router = express.Router()

router.get('/states',  queries.getStates)
router.get('/entities-types', queries.getEntitiesTypes)

router.post('/send-email', email.sendEmail)

module.exports = router