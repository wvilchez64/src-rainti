const express =  require('express')
const queries = require('../model/queries')
const email = require('../model/mailing')
const jwt = require('jsonwebtoken')

const router = express.Router()

// GETs
router.get('/entities',  queries.getDetrans)
router.get('/entity/:id',  queries.getDetranById)
router.get('/states',  queries.getStates)
router.get('/entities-types', queries.getEntitiesTypes)
router.get('/', (req, res)=>{res.send('From API route')})

// PUTs

router.put('/entity/:id',  queries.updateDetranById)

// POSTs
router.post('/send-email', email.sendEmail)
router.post('/create-detran', verifyToken, queries.createDetran)
router.post('/reset-password', queries.resetPassword)
router.post('/recover-password', queries.recoverPassword)
router.post('/register', queries.createUser)
router.post('/login', queries.loginUser)

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