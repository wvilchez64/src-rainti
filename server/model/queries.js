const Pool = require('pg').Pool
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const jsonData = require('./config.json');

const pool = new Pool({  
  user: jsonData.user,
  host: jsonData.host,
  database: jsonData.database,
  password: jsonData.password,
  port: jsonData.port,
})

const getEntitiesTypes = (req, res) =>{
  pool.query('select description as name from entity_type',
   (error, types) => {
    if (error) {
      throw error
    }
    res.status(200).json(types.rows)
  })
}

const getDetrans = (req, res) =>{
  pool.query('select  dd.identity as id, et.description as cnpj, max(case when dd.datacodeid = 1 then dd.description end) as name,   max(case when dd.datacodeid = 2 then dd.description end) as tel,  max(case when dd.datacodeid = 3 then dd.description end) as email from data_detran dd, states st, states_relationship sr, entities et where dd."identity" = sr."identity" and st.id = sr.idstate and dd."identity" = et.id group by dd.identity, et.description order by dd.identity',
   (error, storedDetrans) => {
    if (error) {
      throw error
    }
    res.status(200).json(storedDetrans.rows)
  })
}

const createUser = (req, res) => {
  let userData = req.body
  
  let hash = crypto.createHash('md5').update(userData.password).digest("hex")

  pool.query('insert into users (firstname, lastname, email, username, passwordMd5) values ($1, $2, $3, $4, $5);',
    [userData.firstName, userData.lastName, userData.email, userData.userName, hash],
    (error, registeredUser) => {
      if (error) {
        throw error
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
        throw error
      }else if (loggedUser.rowCount == 0){
        res.status(401).send(`Acesso negado! Usuário ou senha inválidos.`)
      }else{
        let payload = { subject: loggedUser.userName }
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).json({token})
      }
      
    })
}

module.exports = { createUser, loginUser, getDetrans, getEntitiesTypes }