const Pool = require('pg').Pool
const crypto = require('crypto')
const jsonData = require('../../../config/config-database.json');

const pool = new Pool({
  user: jsonData.user,
  host: jsonData.host,
  database: jsonData.database,
  password: jsonData.password,
  port: jsonData.port,
})

const resetPassword = (req, res) => {

  let userData = req.body

  let hash = crypto.createHash('md5').update(userData.password).digest("hex")

  console.log(userData)

  pool.query('select case when resetexpirationdate <= now() then false else true end as resetcodestatus from users where id = $1 and resetcode = $2',
  [userData.userId, userData.resetCode],
    (error, result) => {
      if (error) {
        console.log(error)
        res.status(500).json({"response": error, "returnCode": 0})
      } else if (result.rowCount == 0) {
        console.log("Resposta não encontrado")
        res.status(400).send({"response":'Código de verificação inválido', "returnCode": 1})
      } else if (!result.rows[0].resetcodestatus) {
        console.log("Resposta expirado")
        res.status(200).send({"response":'Código de verificação expirado, por favor gere um novo código', "returnCode": 2})
      } else {
        console.log(result.rows[0].resetcodestatus)
        pool.query('update users set passwordmd5 = $1, blocked = 0 where id = $2 and resetcode = $3', 
        [hash, userData.userId, userData.resetCode],
          (err, update) => {
            if (err) {
              console.log(err)
              res.status(500).send(err)
            } else {
              console.log("Resposta true")
              res.status(200).json({"resposnse":"Senha alterada com sucesso", "returnCode": 3})
            }
          })
      }
    }
  )


}

module.exports = {
  resetPassword,
}