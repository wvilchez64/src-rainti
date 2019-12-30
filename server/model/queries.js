const Pool = require('pg').Pool
const crypto = require('crypto')

const jsonData = require('./config.json.js.js');

const pool = new Pool({  
  user: jsonData.user,
  host: jsonData.host,
  database: jsonData.database,
  password: jsonData.password,
  port: jsonData.port,
})

const createUser = (req, res) => {
  let userData = req.body
  
  let hash = crypto.createHash('md5').update(userData.password).digest("hex")

  pool.query('insert into users (firstname, lastname, email, username, passwordMd5) values ($1, $2, $3, $4, $5);',[userData.firstName, userData.lastName, userData.email, userData.userName, hash], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

const loginUser = (req, res) => {
  let userData = req.body

  let hash = crypto.createHash('md5').update(userData.password).digest("hex")

  pool.query('select * from users where username = $1 and passwordmd5 = $2',[userData.userName, hash], (error, results) => {
      if (error) {
        throw error
      }else if (results.rowCount == 0){
        res.status(401).send(`Acesso negado! Usuário ou senha inválidos.`)
      }else{
        res.status(200).json(results.rows)
      }
      
    })
}

module.exports = { createUser, loginUser }