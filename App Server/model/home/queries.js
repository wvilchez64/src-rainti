const Pool = require('pg').Pool
const jwtToken = require('../../routes/common/jwt-validation')
const jsonData = require('../../config/config-database.json');

const pool = new Pool({
  user: jsonData.user,
  host: jsonData.host,
  database: jsonData.database,
  password: jsonData.password,
  port: jsonData.port,
})

const getUserGroupFeatures = (req, res) => {

    let token = jwtToken.getPayload(req, res)

    let userId = token.subject.userId
  
    pool.query('select f.id as id, '
    +' f.component as component,  '
    +' f.description as featurename '
    +' from   '
    +' features f,  '
    +' entity_type_features ef,  '
    +' entity_type et, '
    +' groups_features gf, '
    +' accounts acc '
    +' where  '
    +' ef.featuresid = f.id  '
    +' and ef.entitytypeid = et.id   '
    +' and acc.groupsid = gf.groupsid '
    +' and gf.featuresid = f.id  '
    +' and gf.status = 1 '
    +' and acc.status = 1 '
    +' and ef.status = 1 '
    +' and acc.userid = $1 '
    +' group by f.id,  '
    +' f.component,  '
    +' f.description '
    +' order by 2,1 ',
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
    getUserGroupFeatures,
}