const express =  require('express')
const queries = require('../../../model/entities/creditor/queries')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.get('/creditors',  verifyToken, queries.getCreditor)
router.get('/creditors/:id',  verifyToken, queries.getCreditorById)
router.put('/update-creditor/:id', verifyToken, queries.updateCreditorById)
router.post('/create-creditor', verifyToken, queries.createCreditor)
router.delete('/delete-creditor/:id', verifyToken, queries.deleteCreditorById)

router.get('/creditor-contacts/contact/:id',  verifyToken, queries.getCreditorContactById)
router.get('/creditor-contacts/:id',  verifyToken, queries.getCreditorContacts)
router.put('/creditor-contacts/update-contact/:id',  verifyToken, queries.updateCreditorContactById)
router.post('/add-creditor-contact/:id', verifyToken, queries.addCreditorContact)
router.delete('/creditor-contacts/delete-contact/:id',  verifyToken, queries.deleteCreditorContactById)

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