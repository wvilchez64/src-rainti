const express =  require('express')
const queries = require('../../../model/entities/detran/queries')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.get('/detrans',  verifyToken, queries.getDetrans)
router.get('/detrans/:id',  verifyToken, queries.getDetranById)
router.get('/detran-contacts/:id',  verifyToken, queries.getDetranContacts)
router.get('/detran-contacts/contact/:id',  verifyToken, queries.getDetranContactById)
router.get('/states-detran-add',  verifyToken, queries.getStatesForDetranAdd)

router.put('/update-detran/:id', verifyToken, queries.updateDetranById)
router.put('/detran-contacts/update-contact/:id',  verifyToken, queries.updateDetranContactById)

router.delete('/delete-detran/:id', verifyToken, queries.deleteDetranById)
router.delete('/detran-contacts/delete-contact/:id',  verifyToken, queries.deleteDetranContactById)

router.post('/create-detran', verifyToken, queries.createDetran)
router.post('/add-detran-contact/:id', verifyToken, queries.addDetranContact)

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
    console.log(payload.subject)
    req.userId = payload.subject
    next()
}

module.exports = router