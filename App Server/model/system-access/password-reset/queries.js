const Pool = require('pg').Pool
const crypto = require('crypto')
const jsonData = require('../config/config-database.json');

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

module.exports = { 
  resetPassword, 
  }