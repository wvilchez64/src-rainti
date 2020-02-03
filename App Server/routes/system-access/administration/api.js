const express =  require('express')
const queries = require('../../../model/system-access/administration/queries')
const jwt = require('jsonwebtoken')

const router = express.Router()

// GETs
router.get('/user-group-features', verifyToken, queries.getUserGroupFeatures)
router.get('/user-group-features/:id', verifyToken, queries.getUserGroupFeaturesById)
router.get('/user-group-entities', verifyToken, queries.getUserGroupEntities)
router.get('/user-group-entities/:id', verifyToken, queries.getUserGroupEntitiesById)
router.get('/user-groups/:id', verifyToken, queries.getGroup)
router.get('/user-main', verifyToken, queries.getUser)
router.get('/user-groups', verifyToken, queries.getGroupsForUsersAdd)

// PUTs
router.put('/user-groups-disable', verifyToken, queries.disableGroupById)
router.put('/user-groups-update/:id', verifyToken, queries.updateGroupById)

// POSTs

router.post('/user-group-add', verifyToken, queries.createGroup)

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