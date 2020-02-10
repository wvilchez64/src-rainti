const express =  require('express')
const queries = require('../../../model/entities/creditor-group/queries')
const jwt = require('../../common/jwt-validation')

const router = express.Router()

router.get('/creditors-group',  jwt.verifyToken, queries.getCreditorGroup)
router.get('/creditors-group/:id',  jwt.verifyToken, queries.getCreditorGroupById)
router.put('/update-creditor-group/:id', jwt.verifyToken, queries.updateCreditorGroupById)
router.post('/create-creditor-group', jwt.verifyToken, queries.createCreditorGroup)
router.delete('/delete-creditor-group/:id', jwt.verifyToken, queries.deleteCreditorGroupById)

router.get('/creditor-group-contacts/contact/:id',  jwt.verifyToken, queries.getCreditorGroupContactById)
router.get('/creditor-group-contacts/:id',  jwt.verifyToken, queries.getCreditorGroupContacts)
router.put('/creditor-group-contacts/update-contact/:id',  jwt.verifyToken, queries.updateCreditorGroupContactById)
router.post('/add-creditor-group-contact/:id', jwt.verifyToken, queries.addCreditorGroupContact)
router.delete('/creditor-group-contacts/delete-contact/:id',  jwt.verifyToken, queries.deleteCreditorGroupContactById)



module.exports = router
