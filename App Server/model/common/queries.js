const Pool = require('pg').Pool
const jsonData = require('../../config/config-database.json');

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
      console.log(error)
    }
    res.status(200).json(types.rows)
  })
}

const getStates = (req, res) =>{
  pool.query('select id, description from states',
   (error, storedStates) => {
    if (error) {
      console.log(error)
    }
    res.status(200).json(storedStates.rows)
  })
}

module.exports = { 
  getStates,
  getEntitiesTypes, 
  }