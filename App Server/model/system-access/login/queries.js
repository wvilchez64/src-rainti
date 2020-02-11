const Pool = require('pg').Pool
const crypto = require('crypto')
const jwtToken = require('../../../routes/common/jwt-validation')
const jwt = require('jsonwebtoken')
const jsonData = require('../../../config/config-database.json');
var randomize = require('randomatic');

const pool = new Pool({
  user: jsonData.user,
  host: jsonData.host,
  database: jsonData.database,
  password: jsonData.password,
  port: jsonData.port,
})

const loginUser = (req, res) => {
  let userData = req.body

  let random = randomize('Aa0', 10)
  let hashRandom = crypto.createHash('md5').update(random).digest("hex")

  let hash = crypto.createHash('md5').update(userData.password).digest("hex")

  pool.query('select * from users where username = $1 and passwordmd5 = $2', [userData.userName, hash], (error, loggedUser) => {
    if (error) {
      console.log(error)
      res.status(400).send('Erro ao acessar os dados do usuário')
    } else if (loggedUser.rowCount == 0) {
      pool.query('select * from users where username = $1', [userData.userName], (error, loggedUser) => {
        if (error) {
          res.status(400).send('Erro ao acessar os dados do usuário')
        } else if (loggedUser.rowCount == 0) {
          res.status(400).send('Usuário não encontrado!')
        } else {
          pool.query('update users set blocked = blocked + 1 where username = $1 ', [userData.userName], (error, result) => {
            if (error) {
              console.log(error)
              res.status(400).send('Erro ao adicionar contador de bloqueio ao usuário')
            } else {
              pool.query('select * from users where username = $1', [userData.userName], (error, resultBlocked) => {
                if (resultBlocked.rows[0].blocked >= 3) {

                  pool.query('update users set passwordmd5 = $2 where username = $1 ', 
                  [userData.userName, hashRandom], 
                  (error, result) => {
                    res.status(401).send('Usuário bloqueado! Renove sua senha através do "Esqueceu sua senha?"')
                  })                  
                } else {
                  res.status(401).send('Restam ' + (3 - resultBlocked.rows[0].blocked) + ' tentivas para bloqueio de seu usuário.')
                }
              })
            }
          })
        }
      })

    } else {

      let token = jwt.sign({ subject: { userId: loggedUser.rows[0].id } }, 'secretKey')

      pool.query('update users set blocked = 0 where username = $1', [userData.userName], (error, result) => {
        if (error) {
          console.log(error)
          res.status(400).send('Erro ao desbloquear os dados do usuário')
        } else {
          res.status(200).json({ token })
        }

      })

    }

  })
}

const getUserRoutes = (req, res) => {

  let token = jwtToken.getPayload(req, res)

  let userId = token.subject.userId

  pool.query(' select f.id as id, '
    + ' f.component as component, '
    + ' f.description as featurename '
    + ' from  '
    + ' features f, '
    + ' entity_type_features ef, '
    + ' entity_type et, '
    + ' groups_features gf, '
    + ' accounts acc '
    + ' where '
    + ' ef.featuresid = f.id '
    + ' and ef.entitytypeid = et.id  '
    + ' and gf.featuresid = f.id'
    + ' and acc.groupsid = gf.groupsid'
    + ' and acc.userid = $1'
    + ' and acc.status =1 '
    + ' and ef.status = 1 '
    + ' and gf.status = 1 '
    + ' group by f.id, f.component , f.description '
    + ' order by 2,1 ',
    [userId],
    (error, storedShowFeaturesForGroup) => {
      if (error) {
        console.log(error)
      } else {
        res.status(200).json(storedShowFeaturesForGroup.rows)
      }
    })
}



module.exports = {
  loginUser,
  getUserRoutes,
}