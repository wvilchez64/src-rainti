const express =  require('express')
const queries = require('../model/queries')
const email = require('../model/mailing')

const router = express.Router()

// GETS
router.get('/entities', verifyToken, queries.getDetrans)
router.get('/entities-types', verifyToken, queries.getEntitiesTypes)
router.get('/', (req, res)=>{res.send('From API route')})

// POSTs
router.post('/send-email', email.sendEmail)
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