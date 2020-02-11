const express =  require('express')
const queries = require('../../../model/system-access/administration/queries')
const jwt = require('../../common/jwt-validation')
const router = express.Router()

// GETs
router.get('/user-main', jwt.verifyToken, queries.getUser)
router.get('/user-group-features', jwt.verifyToken, queries.getUserGroupFeatures)
router.get('/user-group-features/:id', jwt.verifyToken, queries.getUserGroupFeaturesById)
router.get('/user-group-entities', jwt.verifyToken, queries.getUserGroupEntities)
router.get('/user-group-entities/:id', jwt.verifyToken, queries.getUserGroupEntitiesById)
router.get('/user-groups/:id', jwt.verifyToken, queries.getGroup)
router.get('/user-groups-add', jwt.verifyToken, queries.getGroupsForUsersAdd)
router.get('/user-groups', jwt.verifyToken, queries.getGroups)
router.get('/user-detail-groups/:id', jwt.verifyToken, queries.getGroupsDetail)
router.get('/user-detail/:id', jwt.verifyToken, queries.getUserDetail)
router.get('/user-first-access/:id', queries.getUserForFirstAccess)

// PUTs
router.put('/user-groups-disable', jwt.verifyToken, queries.disableGroupById)
router.put('/user-groups-delete', jwt.verifyToken, queries.deleteGroupById)
router.put('/user-groups-update/:id', jwt.verifyToken, queries.updateGroupById)
router.put('/user-update/:id', jwt.verifyToken, queries.updateUserById)
router.put('/user-first-access-update', queries.updateUserPasswordById)

// POSTs

router.post('/user-group-add', jwt.verifyToken, queries.createGroup)
router.post('/user-add', jwt.verifyToken, queries.createUser)



module.exports = router