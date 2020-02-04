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
const getUser = (req, res) => {
  pool.query('select us.id, case when acc.status = 1 then \'Ativo\' else \'Inativo\' end as status, firstname as name, lastname as lastname, username as username,  email as email, cpf as cpf from users us, accounts acc where acc.userid= us.id',
    (error, storedUser) => {
      if (error) {
        console.log(error)
      } else {
        res.status(200).json(storedUser.rows)
      }
    })
}


const createUser = (req, res) => {  

  let token = jwtToken.verifyToken(req, res)

 //const userId = token.subject.userId

 let userData = req.body

 console.log(userData)

 let random = randomize('Aa0',10)

 let hash = crypto.createHash('md5').update(random).digest("hex")

 ;(async () => {
   
     const client = await pool.connect()
   try {
     await client.query('BEGIN')
     // users
    const userId = await client.query('insert into users (firstname, lastname, email, username, passwordMd5) values ($1, $2, $3, $4, $5) returning id', 
    [userData.firstName, userData.lastName, userData.email, userData.userName, hash])

    // accounts
    await client.query('insert into accounts (userid, status, groupsid) values ($1, $2, $3)', 
    [userId.rows[0].id, userData.status ? 1 : 0, userData.groupsId])

    // user_entities
    await client.query('insert into user_entities (userid, entityid) select $1, entityid from groups_relationship where groupsid = $2', 
    [userId.rows[0].id, userData.groupsId])
     
     await client.query('COMMIT')

     res.status(200).json({response: "Grupo "+ userData.planname+ " adicionado"})        
           
   } catch (e) {
     await client.query('ROLLBACK')
     res.status(500).json({response: "Falha ao inserir Grupo no Sistema"})        
     throw e
   } finally {
     client.release()
   }
 })().catch(e => console.error(e.stack))
 
}

const getGroupsDetail = (req, res) => { 
  let token = jwtToken.verifyToken(req, res)

  const userId = parseInt(req.params.id)

  console.log("User :"+userId)

  pool.query('select g.id, g.description as name, case when g.id = acc.groupsid then true else false end as checked '
    + ' from user_entities ue, groups_relationship gp, groups g'
    + ' left join accounts acc on g.id = acc.groupsid '
    + ' where ue.userid = $1 '
    + ' and gp.entityid = ue.entityid  '
    + ' and gp.groupsid = g.id '
    + ' group by g.description, g.id',
    [userId],
    (error, storedShowGroupsForUsers) => {
      if (error) {
        console.log(error)
      } else {
        console.log(JSON.stringify(storedShowGroupsForUsers.rows))
        res.status(200).json(storedShowGroupsForUsers.rows)
      }
    })
}

const getUserDetail = (req, res) => { 
  
}

const updateUserById = (req, res) => { 
  
}

const getGroups = (req, res) => {

  let token = jwtToken.verifyToken(req, res)

  const userId = token.subject.userId

  console.log("User :"+userId)

  pool.query('select g.id, g.description as name, case when g.status = 1 then \'Ativo\' else \'Inativo\' end as status'
    + ' from user_entities ue, groups_relationship gp, groups g '
    + ' where ue.userid = $1 '
    + ' and gp.entityid = ue.entityid  '
    + ' and gp.groupsid = g.id '
    + ' and g.status in (0,1) '
    + ' group by g.description, g.id',
    [userId],
    (error, storedShowGroupsForUsers) => {
      if (error) {
        console.log(error)
      } else {
        console.log(JSON.stringify(storedShowGroupsForUsers.rows))
        res.status(200).json(storedShowGroupsForUsers.rows)
      }
    })
}

const getGroup = (req, res) => {
  let groupsId = parseInt(req.params.id)
  pool.query('select g.description as planname, case when g.status = 1 then true else false end as planstatus, ey.description as entitytype from groups g, entity_type ey where g.entitytypeid = ey.id and g.status in (0,1) and g.id =$1' ,
  [groupsId],
    (error, storedUser) => {
      if (error) {
        console.log(error)
      } else {
        res.status(200).json(storedUser.rows)
      }
    })
}

// Exibindo os grupos existentes na criação de usuários
const getGroupsForUsersAdd = (req, res) => {

  let token = jwtToken.verifyToken(req, res)

  const userId = token.subject.userId

  console.log("User :"+userId)

  pool.query('select g.id, g.description as name, false as checked '
    + ' from user_entities ue, groups_relationship gp, groups g '
    + ' where ue.userid = $1 '
    + ' and gp.entityid = ue.entityid  '
    + ' and gp.groupsid = g.id '
    + ' and g.status in (0,1)'
    + ' group by g.description, g.id',
    [userId],
    (error, storedShowGroupsForUsers) => {
      if (error) {
        console.log(error)
      } else {
        console.log(JSON.stringify(storedShowGroupsForUsers.rows))
        res.status(200).json(storedShowGroupsForUsers.rows)
      }
    })
}

// Exibindo as features existentes na criação de grupos
const getUserGroupFeatures = (req, res) => {

  let token = jwtToken.verifyToken(req, res)

  pool.query(' select f.id as id, '
    + ' f.component as component, '
    + ' f.description as featurename, '
    + ' et.description as entitytype, '
    + ' false as checked'
    + ' from  '
    + ' features f, '
    + ' entity_type_features ef, '
    + ' entity_type et '
    + ' where '
    + ' ef.featuresid = f.id '
    + ' and ef.entitytypeid = et.id  '
    + ' order by 2,1 ',
    (error, storedShowFeaturesForGroup) => {
      if (error) {
        console.log(error)
      } else {
        res.status(200).json(storedShowFeaturesForGroup.rows)
      }
    })
}

const getUserGroupFeaturesById = (req, res) => {

  let token = jwtToken.verifyToken(req, res)

  let groupsid = parseInt(req.params.id)

  pool.query(' select f.id as featureid,  '
  +' f.description as featurename,  '
  +' ey.description as entitytype,  '
  +' case when gp.status = 1 then true else false end as checked '
  +' from  '
  +' groups_features gp,  '
  +' features f, '
  +' entity_type_features ef, '
  +' entity_type ey'
  +' where gp.groupsid = $1 '
  +' and ef.entitytypeid = (select entitytypeid from groups where id = $1) '
  +' and gp.featuresid = f.id  '
  +' and ef.featuresid = f.id '
  +' and ef.entitytypeid = ey.id'
  +' order by 3, 1 ',
  [groupsid],
    (error, storedShowFeaturesForGroup) => {
      if (error) {
        console.log(error)
      } else {
        res.status(200).json(storedShowFeaturesForGroup.rows)
      }
    })
}



// Exibindo as features existentes na criação de grupos
const getUserGroupEntities = (req, res) => {

  let token = jwtToken.verifyToken(req, res)

  const userId = token.subject.userId

  pool.query('select et.id as entityid, '
    + ' dd.description as entityname,  '
    + ' ey.description as entitytype,  '
    + ' false as checked '
    + ' from  '
    + ' accounts acc, '
    + ' groups_relationship gp, '
    + ' data_detran dd, '
    + ' entities et, '
    + ' entity_type ey '
    + ' where acc.userid = $1 '
    + ' and acc.groupsid = gp.groupsid '
    + ' and (dd.identity = gp.entityid) '
    + ' and et.status = true '
    + ' and gp.entityid = et.id '
    + ' and dd.datacodeid = 1 '
    + ' and et.entitytypeid = ey.id '
    + ' and gp.status = 1 '
    + ' and acc.status = 1 '
    + ' union '
    + ' select et.id as entityid,  '
    + ' dd.description as entityname,  '
    + ' ey.description as entitytype,  '
    + ' false as checked '
    + ' from  '
    + ' accounts acc, '
    + ' groups_relationship gp, '
    + ' data_creditor dd, '
    + ' entities et, '
    + ' entity_type ey '
    + ' where acc.userid = $1 '
    + ' and acc.groupsid = gp.groupsid '
    + ' and (dd.identity = gp.entityid) '
    + ' and et.status = true '
    + ' and gp.entityid = et.id '
    + ' and dd.datacodeid = 8 '
    + ' and et.entitytypeid = ey.id '
    + ' and gp.status = 1 '
    + ' and acc.status = 1', [userId],
    (error, storedShowFeaturesForGroup) => {
      if (error) {
        console.log(error)
      } else {
        res.status(200).json(storedShowFeaturesForGroup.rows)
      }
    })
}

const getUserGroupEntitiesById = (req, res) => {

  let token = jwtToken.verifyToken(req, res)

  let groupsid = parseInt(req.params.id)

  pool.query(' select et.id as entityid,  '
  +' dd.description as entityname,  '
  +' ey.description as entitytype,  '
  +' case when gp.status = 1 then true else false end as checked '
  +' from  '
  +' groups_relationship gp,  '
  +' data_detran dd, '
  +' entities et, '
  +' entity_type ey'
  +' where gp.groupsid = $1 '
  +' and dd.identity = gp.entityid '
  +' and dd.datacodeid = 1  '
  +' and gp.entityid = et.id '
  +' and et.entitytypeid = ey.id'
  +' union '
  +' select et.id as entityid,  '
  +' dd.description as entityname,  '
  +' ey.description as entitytype,  '
  +' case when gp.status = 1 then true else false end as checked '
  +' from  '
  +' groups_relationship gp,  '
  +' data_creditor dd, '
  +' entities et, '
  +' entity_type ey'
  +' where gp.groupsid = $1 '
  +' and dd.identity = gp.entityid '
  +' and dd.datacodeid = 8  '
  +' and gp.entityid = et.id '
  +' and et.entitytypeid = ey.id'
  +' order by 3, 1 ',
  [groupsid],
    (error, storedShowFeaturesForGroup) => {
      if (error) {
        console.log(error)
      } else {
        res.status(200).json(storedShowFeaturesForGroup.rows)
      }
    })
}

const disableGroupById = (req, res) => {

  let userData = req.body
  console.log("ID: " + userData[0])

  pool.query('update groups set status = 0 where id = $1 ',
    [userData.id],
    (error, storedShowFeaturesForGroup) => {
      if (error) {
        console.log(error)
        res.status(500).json(error)
      } else {
        res.status(200).json('Registro atualizado com sucesso')
      }
    })
}

const deleteGroupById = (req, res) => {

  let userData = req.body
  console.log("ID: " + userData.id)

  pool.query('update groups set status = 2 where id = $1 ',
    [userData.id],
    (error, storedShowFeaturesForGroup) => {
      if (error) {
        console.log(error)
        res.status(500).json(error)
      } else {
        res.status(200).json('Registro atualizado com sucesso')
      }
    })
}

const createGroup = (req, res) => {  

   let token = jwtToken.verifyToken(req, res)

  //const userId = token.subject.userId

  let userData = req.body

  let entityTypeId = userData.entitytype == 'DETRAN' ? 1 : userData.entitytype == 'CREDORA' ? 2 : userData.entitytype == 'GESTORA' ? 3 : 0

  ;(async () => {
    
      const client = await pool.connect()
    try {
      await client.query('BEGIN')
      // groups
       const groupInsert = await client.query('insert into groups (description, status, entitytypeid) values ($1, $2, $3) returning id', 
      [userData.planname, userData.planstatus ? 1 : 0, entityTypeId]) 
      
      // groups_relationship
      userData.entities.forEach(element => {
          client.query('insert into groups_relationship (entityid, status, groupsid) values ($1, $2, $3) ', 
          [element.entityid, element.checked ? 1 : 0, groupInsert.rows[0].id])
      });

       // groups_features
       userData.features.forEach(element => {  
          client.query('insert into groups_features (featuresid, status, groupsid) values ($1, $2, $3) ', 
          [element.id, element.checked ? 1 : 0, groupInsert.rows[0].id])   
      });
      
      await client.query('COMMIT')

      res.status(200).json({response: "Grupo "+ userData.planname+ " adicionado"})        
            
    } catch (e) {
      await client.query('ROLLBACK')
      res.status(500).json({response: "Falha ao inserir Grupo no Sistema"})        
      throw e
    } finally {
      client.release()
    }
  })().catch(e => console.error(e.stack))
 
}

const updateGroupById = (req, res) => {  

  let token = jwtToken.verifyToken(req, res)

 //const userId = token.subject.userId

 let userData = req.body

 let groupsId = parseInt(req.params.id)

 let entityTypeId = userData.entitytype == 'DETRAN' ? 1 : userData.entitytype == 'CREDORA' ? 2 : userData.entitytype == 'GESTORA' ? 3 : 0

 ;(async () => {
   
     const client = await pool.connect()
   try {
     await client.query('BEGIN')
     // groups
      const groupInsert = await client.query('update groups set status = $1, description = $3 where id = $2', 
     [ userData.planstatus ? 1 : 0, groupsId, userData.planname]) 
     
     // groups_relationship
      await userData.entities.forEach(element => {
         client.query('update groups_relationship set status = $1 where entityid = $2 and groupsid = $3', 
         [ element.checked ? 1 : 0, element.entityid, groupsId])
     });

      // groups_features
      await userData.features.forEach(element => {  
         client.query('update groups_features set status = $1 where featuresid = $2 and groupsid = $3', 
         [ element.checked ? 1 : 0, element.featureid, groupsId])   
         
     });
     
     await client.query('COMMIT')

     res.status(200).json({response: "Grupo "+ userData.planname+ " adicionado"})        
           
   } catch (e) {
     await client.query('ROLLBACK')
     res.status(500).json({response: "Falha ao inserir Grupo no Sistema"})        
     throw e
   } finally {
     client.release()
   }
 })().catch(e => console.error(e.stack))

}

module.exports = {
  getUser,
  createUser,
  getGroups,
  getGroupsForUsersAdd,
  getUserGroupFeatures,
  getUserGroupEntities,
  disableGroupById,
  deleteGroupById,
  createGroup,
  getUserGroupFeaturesById,
  getUserGroupEntitiesById,
  getGroup,
  updateGroupById,
  getGroupsDetail,
  getUserDetail,
  updateUserById,

}