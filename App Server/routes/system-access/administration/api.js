const express =  require('express')
const queries = require('../../../model/system-access/administration/queries')

const router = express.Router()

// Criação e exibição de user, grupos e entidades para os usuários
router.post('/user-add', queries.createUser)
router.get('/user-main', queries.getUser)
router.get('/show-user-groups',queries.getGroupsForUsersAdd)
router.get('/show-user-entities', queries.getUserEntities)

// Criação e exibição de grupos e features
router.get('/group-main', queries.getGroup)
router.post('/group-add',queries.createGroup)
router.get('/show-features-group', queries.getUserGroupFeatures)

module.exports = router