const Pool = require('pg').Pool
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const jsonData = require('../config/config-database.json');
var randomize = require('randomatic');

const pool = new Pool({  
  user: jsonData.user,
  host: jsonData.host,
  database: jsonData.database,
  password: jsonData.password,
  port: jsonData.port,
})


const resetPassword = (req, res) =>{

  let userData = req.body

  let hash = crypto.createHash('md5').update(userData.password).digest("hex")

  pool.query('update users set passwordmd5 = $1 where username = $2 and resetcode = $3',[hash, userData.userName, userData.resetCode],
   (error, result) => {
    if (error) {
      throw error
    }else{      
      if(result.rowCount == 0){
        res.status(400).send('Dados inválidos')
      }else{
        res.status(200).json(result.affectedRows)
      }
      
    }    
  })
}

const recoverPassword = (req, res) =>{
  let userData = req.body
  let random = randomize('Aa0',6)
  pool.query('select email from users where email = $1 or username = $1',[userData.email],
   (error, email) => {
    if (error) {
      console.log(error)
    }
    if(email.rowCount == 0){
      res.status(401).json(email.rows)
    }else{
      res.status(200).json({code: random, email: userData.email})
      pool.query('update users set resetcode = $1 where username = $2 or email = $2 ',[random, userData.email])
    }
    
  })
}

const getEntitiesTypes = (req, res) =>{
  pool.query('select description as name from entity_type',
   (error, types) => {
    if (error) {
      console.log(error)
    }
    res.status(200).json(types.rows)
  })
}

const getDetrans = (req, res) =>{
  pool.query('select  dd.identity as id, et.description as cnpj, max(case when dd.datacodeid = 1 then dd.description end) as name,   max(case when dd.datacodeid = 2 then dd.description end) as tel,  max(case when dd.datacodeid = 3 then dd.description end) as email from data_detran dd, states st, states_relationship sr, entities et where dd."identity" = sr."identity" and st.id = sr.idstate and dd."identity" = et.id group by dd.identity, et.description order by dd.identity',
   (error, storedDetrans) => {
    if (error) {
      console.log(error)
    }
    res.status(200).json(storedDetrans.rows)
  })
}

const getDetranById = (req, res) =>{
  
  const id = parseInt(req.params.id)

  pool.query('select  dd.identity as id, et.description as cnpj, max(case when dd.datacodeid = 1 then dd.description end) as name,   max(case when dd.datacodeid = 2 then dd.description end) as phone,  max(case when dd.datacodeid = 3 then dd.description end) as email from data_detran dd, states st, states_relationship sr, entities et where dd."identity" = sr."identity" and st.id = sr.idstate and dd."identity" = et.id  and et.id = $1 group by dd.identity, et.description order by dd.identity',
  [id],
   (error, storedDetrans) => {
    if (error) {
      console.log(error)
    }
    console.log(storedDetrans.rows)
    res.status(200).json(storedDetrans.rows)
  })
}

const getDetranContacts = (req, res) =>{
  
  const id = parseInt(req.params.id)

  pool.query('select  dd.identity as id, et.description as cnpj, max(case when dd.datacodeid = 1 then dd.description end) as name,   max(case when dd.datacodeid = 2 then dd.description end) as phone,  max(case when dd.datacodeid = 3 then dd.description end) as email from data_detran dd, states st, states_relationship sr, entities et where dd."identity" = sr."identity" and st.id = sr.idstate and dd."identity" = et.id  and et.id = $1 group by dd.identity, et.description order by dd.identity',
  [id],
   (error, storedDetrans) => {
    if (error) {
      console.log(error)
    }
    console.log(storedDetrans.rows)
    res.status(200).json(storedDetrans.rows)
  })
}

const getDetranContactById = (req, res) =>{
  
  const id = parseInt(req.params.id)

  pool.query('select  dd.identity as id, et.description as cnpj, max(case when dd.datacodeid = 1 then dd.description end) as name,   max(case when dd.datacodeid = 2 then dd.description end) as phone,  max(case when dd.datacodeid = 3 then dd.description end) as email from data_detran dd, states st, states_relationship sr, entities et where dd."identity" = sr."identity" and st.id = sr.idstate and dd."identity" = et.id  and et.id = $1 group by dd.identity, et.description order by dd.identity',
  [id],
   (error, storedDetrans) => {
    if (error) {
      console.log(error)
    }
    console.log(storedDetrans.rows)
    res.status(200).json(storedDetrans.rows)
  })
}

const createDetran = (req, res) => {
  let userData = req.body  

  pool.query('insert into entities (description, status, datacodeid, entitytypeid) values ($1, true, 5, 1);',
    [userData.cnpj],
    (error, registeredDetran) => {
      if (error) {
        res.status(401).send('CNPJ já cadastrado')
        //throw error        
      } else {             
        pool.query('insert into data_detran (description, identity, datacodeid) values ($1, (select id from entities where description = $2), 1 )',
        [userData.userName,userData.cnpj])
        pool.query('insert into data_detran (description, identity, datacodeid) values ($1, (select id from entities where description = $2), 2 )',
        [userData.phone,userData.cnpj])
        pool.query('insert into data_detran (description, identity, datacodeid) values ($1, (select id from entities where description = $2), 3 )',
        [userData.email,userData.cnpj])
        pool.query('insert into states_relationship (idstate, identity) values ((select id from states where description = $1), (select id from entities where description = $2))',
        [userData.topic,userData.cnpj])
        res.status(200).json({response: "Detran adicionado"})       
      }

    })
}

const updateDetranById = (req, res) =>{

  let userData = req.body
  
  const id = parseInt(req.params.id)

  pool.query('select id from entities where id = $1',
    [id],
    (error, registeredDetran) => {
      if (error) {
        res.status(401).send('Falha ao atualizar registro')
        //throw error        
      } else if(registeredDetran.rows == 0){
        res.status(201).send('Registro não encontrado')
      }else{             
        pool.query('update data_detran set description = $1 where identity = $2 and datacodeid = 1',
        [userData.name,id])
        pool.query('update data_detran set description = $1 where identity = $2 and datacodeid = 2',
        [userData.phone,id])
        pool.query('update data_detran set description = $1 where identity = $2 and datacodeid = 3',
        [userData.email,id])

        pool.query('update entities set description = $1 where id = $2',
        [userData.cnpj,id])
        res.status(200).json({response: "Detran adicionado"})       
      }

    })
}

const getStates = (req, res) =>{
  pool.query('select description from states',
   (error, storedStates) => {
    if (error) {
      console.log(error)
    }
    res.status(200).json(storedStates.rows)
  })
}



const createUser = (req, res) => {
  let userData = req.body
  
  let hash = crypto.createHash('md5').update(userData.password).digest("hex")

  pool.query('insert into users (firstname, lastname, email, username, passwordMd5) values ($1, $2, $3, $4, $5);',
    [userData.firstName, userData.lastName, userData.email, userData.userName, hash],
    (error, registeredUser) => {
      if (error) {
        console.log(error)
      } else {
        let payload = { subject: registeredUser.userName }
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).json({token})
      }

    })
}



const loginUser = (req, res) => {
  let userData = req.body

  let hash = crypto.createHash('md5').update(userData.password).digest("hex")

  pool.query('select * from users where username = $1 and passwordmd5 = $2',[userData.userName, hash], (error, loggedUser) => {
      if (error) {
        console.log(error)
      }else if (loggedUser.rowCount == 0){
        res.status(401).send('Acesso negado! Usuário ou senha inválidos.')
      }else{
        let payload = { subject: loggedUser.userName }
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).json({token})
      }
      
    })
}

module.exports = { 
  createUser, 
  loginUser, 
  getDetrans, 
  getDetranById, 
  getDetranContactById, 
  getDetranContacts, 
  updateDetranById,
  getEntitiesTypes, 
  recoverPassword, 
  resetPassword, 
  createDetran, 
  getStates}