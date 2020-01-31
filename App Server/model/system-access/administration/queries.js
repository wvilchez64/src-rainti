const Pool = require('pg').Pool
const crypto = require('crypto')
const jsonData = require('../../../config/config-database.json')
var randomize = require('randomatic');
const jwtToken = require('../../../routes/common/jwt-validation')

const pool = new Pool({  
  user: jsonData.user,
  host: jsonData.host,
  database: jsonData.database,
  password: jsonData.password,
  port: jsonData.port,
})

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






// Exibindo as features existentes na criação de grupos
const getUserGroupFeatures = (req, res) =>{

  let token = jwtToken.verifyToken( req, res)

  pool.query('select f.component as component, '
            +' f.description as featurename, '
            +' et.description as entitytype '
            +' from  '
            +' features f, '
            +' entity_type_features ef, '
            +' entity_type et '
            +' where '
            +' ef.featuresid = f.id '
            +' and ef.entitytypeid = et.id  '
            +' order by 2,1 ',
   (error, storedShowFeaturesForGroup) => {
    if (error) {
      console.log(error)
    }else{
    res.status(200).json(storedShowFeaturesForGroup.rows)
    }
  })
}

// Exibindo as features existentes na criação de grupos
const getUserGroupEntities = (req, res) =>{

  let token = jwtToken.verifyToken( req, res)

  const userId = token.subject.userId

  pool.query('select et.id as entityid, '
  +' dd.description as entityname,  '
  +' ey.description as entitytype  '
  +' from  '
+' accounts acc, '
   +' groups_relationship gp, '
   +' data_detran dd, '
   +' entities et, '
   +' entity_type ey '
   +' where acc.userid = $1 '
+' and acc.groupsid = gp.groupsid '
 +' and (dd.identity = gp.entityid) '
 +' and et.status = true '
 +' and gp.entityid = et.id '
 +' and dd.datacodeid = 1 '
 +' and et.entitytypeid = ey.id '
 +' and gp.status = 1 '
 +' and acc.status = 1 '
 +' union '
+' select et.id as entityid,  '
+' dd.description as entityname,  '
  +' ey.description as entitytype  '
  +' from  '
+' accounts acc, '
   +' groups_relationship gp, '
   +' data_creditor dd, '
   +' entities et, '
   +' entity_type ey '
   +' where acc.userid = $1 '
+' and acc.groupsid = gp.groupsid '
 +' and (dd.identity = gp.entityid) '
 +' and et.status = true '
 +' and gp.entityid = et.id '
 +' and dd.datacodeid = 8 '
 +' and et.entitytypeid = ey.id '
 +' and gp.status = 1 '
 +' and acc.status = 1',[userId],
   (error, storedShowFeaturesForGroup) => {
    if (error) {
      console.log(error)
    }else{
    res.status(200).json(storedShowFeaturesForGroup.rows)
    }
  })
}

module.exports = { 
  getUser,
  getGroupsForUsersAdd,
  getUserGroupFeatures,
  getUserGroupEntities,
  
  }