const express =  require('express')
const queries = require('../../../model/system-access/administration/queries')
const jwt = require('jsonwebtoken')

const router = express.Router()

// Criação e exibição de user, grupos e entidades para os usuários
router.post('/user-add', verifyToken, queries.createUser)
router.get('/user-main', verifyToken, queries.getUser)
router.get('/show-user-groups', verifyToken, queries.getGroupsForUsersAdd)
router.get('/show-user-entities', verifyToken, queries.getUserEntities)

// Criação e exibição de grupos e features
router.get('/group-main', verifyToken, queries.getGroup)
router.post('/group-add', verifyToken, queries.createGroup)
router.get('/show-features-group', verifyToken, queries.getUserGroupFeatures)

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