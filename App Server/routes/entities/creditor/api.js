const express =  require('express')
const queries = require('../../../model/entities/creditor/queries')
const jwt = require('../../common/jwt-validation')

const router = express.Router()

router.get('/creditors',  jwt.verifyToken, queries.getCreditor)
router.get('/creditors/:id',  jwt.verifyToken, queries.getCreditorById)
router.put('/update-creditor/:id', jwt.verifyToken, queries.updateCreditorById)
router.post('/create-creditor', jwt.verifyToken, queries.createCreditor)
router.delete('/delete-creditor/:id', jwt.verifyToken, queries.deleteCreditorById)

router.get('/creditor-contacts/contact/:id',  jwt.verifyToken, queries.getCreditorContactById)
router.get('/creditor-contacts/:id',  jwt.verifyToken, queries.getCreditorContacts)
router.put('/creditor-contacts/update-contact/:id',  jwt.verifyToken, queries.updateCreditorContactById)
router.post('/add-creditor-contact/:id', jwt.verifyToken, queries.addCreditorContact)
router.delete('/creditor-contacts/delete-contact/:id',  jwt.verifyToken, queries.deleteCreditorContactById)

router.get('/get-detrans',  jwt.verifyToken, queries.getDetrans)
router.get('/get-creditors-group',  jwt.verifyToken, queries.getCreditorsGroup)
router.get('/get-detrans/:id',  jwt.verifyToken, queries.getDetransById)
router.get('/get-creditors-group/:id',  jwt.verifyToken, queries.getCreditorsGroupById)



module.exports = router