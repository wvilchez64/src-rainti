const express =  require('express')
const queries = require('../../../model/entities/detran/queries')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.get('/detrans',  verifyToken, queries.getDetrans)
router.get('/detrans/:id',  verifyToken, queries.getDetranById)
router.get('/states-detran-add',  verifyToken, queries.getStatesForDetranAdd)

router.put('/update-detran/:id', verifyToken, queries.updateDetranById)

router.post('/create-detran', verifyToken, queries.createDetran)

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