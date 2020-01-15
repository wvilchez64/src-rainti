const express =  require('express')
const queries = require('../../../model/entities/creditor-group/queries')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.get('/creditors-group',  verifyToken, queries.getCreditorGroup)
router.get('/creditors-group/:id',  verifyToken, queries.getCreditorGroupById)
router.put('/update-creditor-group/:id', verifyToken, queries.updateCreditorGroupById)
router.post('/create-creditor-group', verifyToken, queries.createCreditorGroup)
router.delete('/delete-creditor-group/:id', verifyToken, queries.deleteCreditorGroupById)

router.get('/creditor-group-contacts/contact/:id',  verifyToken, queries.getCreditorGroupContactById)
router.get('/creditor-group-contacts/:id',  verifyToken, queries.getCreditorGroupContacts)
router.put('/creditor-group-contacts/update-contact/:id',  verifyToken, queries.updateCreditorGroupContactById)
router.post('/add-creditor-group-contact/:id', verifyToken, queries.addCreditorGroupContact)
router.delete('/creditor-group-contacts/delete-contact/:id',  verifyToken, queries.deleteCreditorGroupContactById)

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload){
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}

module.exports = router
