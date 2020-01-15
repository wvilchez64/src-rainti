const Pool = require('pg').Pool
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const jsonData = require('../../../config/config-database.json')
var randomize = require('randomatic');

const pool = new Pool({  
  user: jsonData.user,
  host: jsonData.host,
  database: jsonData.database,
  password: jsonData.password,
  port: jsonData.port,
})

// Criação de usuários
const createUser = (req, res) => {
  let userData = req.body
  
  let hash = crypto.createHash('md5').update(userData.password).digest("hex")

  pool.query('insert into users (firstname, lastname, email, username, passwordMd5) values ($1, $2, $3, $4, $5);',
    [userData.firstName, userData.lastName, userData.email, userData.userName, hash],
    (error, registeredUser) => {
      if (error) {
        console.log(error)
        res.status(401).send('Usuário já cadastrado!')
      } else {
        res.status(200).json(registeredUser)
      }

    })
}

// Exibição de usuários
const getUser = (req, res) =>{
  pool.query('select firstname as name, lastname as lastname, username as username,  email as email from users',
   (error, storedUser) => {
    if (error) {
      console.log(error)
    }else{
    res.status(200).json(storedUser.rows)
    }
  })
}

// Exibindo os grupos existentes na criação de usuários
const getGroupsForUsersAdd = (req, res) =>{
  pool.query('select planname, id from role_plans',
   (error, storedShowGroupsForUsers) => {
    if (error) {
      console.log(error)
    }else{
    res.status(200).json(storedShowGroupsForUsers.rows)
    }
  })
}

// Exibindo as entidades existentes na criação de usuários
const getUserEntities = (req, res) =>{
  pool.query('select description, id from entity_type',
   (error, storedShowEntitiesForUsers) => {
    if (error) {
      console.log(error)
    }else{
    res.status(200).json(storedShowEntitiesForUsers.rows)
    }
  })
}

// Criação de grupos
const createGroup = (req, res) => {
  let groupData = req.body

  pool.query('insert into role_plans (planname, entityid, status) values ($1, $2, $3);',
    [groupData.planname, groupData.entityid, groupData.status],
    (error, registeredGroup) => {
      if (error) {
        console.log(error)
        res.status(401).send('Grupo já cadastrado!')
      } else {
        res.status(200).json(registeredGroup)
      }
    })
}

// Exibição de grupos
const getGroup = (req, res) =>{
  pool.query('select planname as name, entityid as entidade, status as status from role_plans',
   (error, storedGroup) => {
    if (error) {
      console.log(error)
    }else{
    res.status(200).json(storedGroup.rows)
    }
  })
}

// Exibindo as features existentes na criação de grupos
const getUserGroupFeatures = (req, res) =>{
  pool.query('select description as name, id from features',
   (error, storedShowFeaturesForGroup) => {
    if (error) {
      console.log(error)
    }else{
    res.status(200).json(storedShowFeaturesForGroup.rows)
    }
  })
}

module.exports = { 
  createUser,
  getUser,
  getGroup,
  createGroup,
  getGroupsForUsersAdd,
  getUserEntities,
  getUserGroupFeatures,
  
  }