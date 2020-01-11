const express =  require('express')
const queriesCommon = require('../../model/common/queries')
const email = require('../../common/mailing')

const router = express.Router()

router.get('/states',  queriesCommon.getStates)
router.get('/entities-types', queriesCommon.getEntitiesTypes)

router.post('/send-email', email.sendEmail)

module.exports = router