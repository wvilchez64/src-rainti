const Pool = require('pg').Pool
const jsonData = require('../../config/config-database.json');

const pool = new Pool({  
  user: jsonData.user,
  host: jsonData.host,
  database: jsonData.database,
  password: jsonData.password,
  port: jsonData.port,
})

const getDetrans = (req, res) =>{
  pool.query('select  dd.identity as id, et.description as cnpj, max(case when dd.datacodeid = 1 then dd.description end) as name,   max(case when dd.datacodeid = 2 then dd.description end) as tel,  max(case when dd.datacodeid = 3 then dd.description end) as email from data_detran dd, states st, states_relationship sr, entities et where dd."identity" = sr."identity" and st.id = sr.idstate and dd."identity" = et.id  and et.status = true group by dd.identity, et.description order by dd.identity',
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

  pool.query('select * from entities where description = $1 and status = true',
    [userData.cnpj],
    (error, activeDetran) => {    
      if (error) {
        res.status(400).send('Erro ao buscar detran')
        //throw error        
      } else if(activeDetran.rowCount > 0){
        res.status(401).send('CNPJ já cadastrado')
      }else{          
        pool.query('insert into entities (description, status, datacodeid, entitytypeid) values ($1, true, 5, 1);',
        [userData.cnpj])   
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
      } else if(registeredDetran.rowCount == 0){
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

const getStatesForDetranAdd = (req, res) =>{
  pool.query('select description from states where id not in (select st.id from states st, states_relationship sr, entities et where et.id = sr.identity and st.id = sr.idstate and status = true)',
   (error, storedStates) => {
    if (error) {
      console.log(error)
    }
    res.status(200).json(storedStates.rows)
  })
}


module.exports = { 
  getDetrans, 
  getDetranById, 
  getDetranContactById, 
  getDetranContacts, 
  getStatesForDetranAdd, 
  updateDetranById, 
  createDetran,
  }