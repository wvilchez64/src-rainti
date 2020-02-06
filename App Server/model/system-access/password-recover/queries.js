const Pool = require('pg').Pool
const jsonData = require('../../../config/config-database.json');
var randomize = require('randomatic');

const pool = new Pool({  
  user: jsonData.user,
  host: jsonData.host,
  database: jsonData.database,
  password: jsonData.password,
  port: jsonData.port,
})

const recoverPassword = (req, res) =>{
  let userData = req.body
  let random = randomize('Aa0',6)
  console.log(userData)
  pool.query('select id, email from users where cpf = $1',[userData.cpf],
   (error, email) => {
    if (error) {
      console.log(error)
    }
    else if(email.rowCount == 0){
      res.status(401).json(email.rows)
    }else{
      res.status(200).json({code: random, emailTo: email.rows })
      pool.query('update users set resetcode = $1 where cpf = $2 ',[random, userData.cpf])
    }
    
  })
}

module.exports = { 
  recoverPassword, 
  
  }