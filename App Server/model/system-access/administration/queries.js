const Pool = require('pg').Pool
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const jsonData = require('../../../config/config-database.json')
var randomize = require('randomatic');
const jwtToken = require('../../../routes/common/functions')

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

  let token = jwtToken.verifyToken( req, res)

  console.log(token.subject.userId+' ' + req.body)

 
  pool.query('select rp.id as id, '
            +'	   p.description as name, '
            +'	   dd.description as entityname '
            +'from plan p, '
            +'	   role_plans rp, '
            +'	   accounts acc, '
            +'	   data_detran dd '
            +'where acc.roleplanid = rp.id '
            +'and rp.planid = p.id '
            +'and acc.userid = $1 '
            +'and dd.identity = rp.entityid '
            +'and dd.datacodeid = 1  '
            +'union '
            +'select rp.id as id, '
            +'	   p.description as name, '
            +'	   dd.description as entityname '
            +'from plan p, '
            +'	   role_plans rp, '
            +'	   accounts acc, '
            +'	   data_creditor dd '
            +'where acc.roleplanid = rp.id '
            +'and rp.planid = p.id '
            +'and acc.userid = $1 '
            +'and dd.identity = rp.entityid '
            +'and dd.datacodeid = 9 '
            +'order by 2', 
      [token.subject.userId],
   (error, storedShowGroupsForUsers) => {
    if (error) {
      console.log(error)
    }else{
    console.log(JSON.stringify(storedShowGroupsForUsers.rows))
    res.status(200).json(storedShowGroupsForUsers.rows)
    }
  })
}

// Exibindo as entidades existentes na criação de usuários
const getUserEntities = (req, res) =>{
  pool.query('select  dd.identity as id, max(case when dd.datacodeid = 9 then dd.description end) as name  from data_creditor dd, states st, states_relationship sr, entities et where dd."identity" = sr."identity" and st.id = sr.idstate and dd."identity" = et.id  and et.status = true group by dd.identity order by 2',
   (error, storedShowEntitiesForUsers) => {
    if (error) {
      console.log(error)
    }else{
    console.log(storedShowEntitiesForUsers.rows)
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
  createGroup,
  getGroupsForUsersAdd,
  getUserEntities,
  getUserGroupFeatures,
  
  }