const Pool = require('pg').Pool
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const jsonData = require('../../../config/config-database.json');

const pool = new Pool({  
  user: jsonData.user,
  host: jsonData.host,
  database: jsonData.database,
  password: jsonData.password,
  port: jsonData.port,
})

const loginUser = (req, res) => {
  let userData = req.body

  let hash = crypto.createHash('md5').update(userData.password).digest("hex")

  pool.query('select * from users where username = $1 and passwordmd5 = $2',[userData.userName, hash], (error, loggedUser) => {
      if (error) {
        console.log(error)
        res.status(400).send('Erro ao acessar os dados do usuário')
      }else if (loggedUser.rowCount == 0){
        res.status(401).send('Acesso negado! Usuário ou senha inválidos.')
      }else{  
        let token = jwt.sign({ subject: {userId: loggedUser.rows[0].id} }, 'secretKey')
        res.status(200).json({token})
      }
      
    })
}
module.exports = { 
  loginUser, 
  }