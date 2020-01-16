const Pool = require('pg').Pool
const jsonData = require('../../../config/config-database.json');

const pool = new Pool({  
  user: jsonData.user,
  host: jsonData.host,
  database: jsonData.database,
  password: jsonData.password,
  port: jsonData.port,
})

const getDetrans = (req, res) =>{
  pool.query('select  dd.identity as id, et.description as cnpj, max(case when dd.datacodeid = 1 then dd.description end) as name,   max(case when dd.datacodeid = 2 then dd.description end) as tel,  max(case when dd.datacodeid = 3 then dd.description end) as email, max(case when dd.datacodeid = 7 then dd.description end) as dddModel from data_detran dd, states st, states_relationship sr, entities et where dd."identity" = sr."identity" and st.id = sr.idstate and dd."identity" = et.id  and et.status = true group by dd.identity, et.description order by 3',
   (error, storedDetrans) => {
    if (error) {
      console.log(error)
    }
    res.status(200).json(storedDetrans.rows)
  })
}

const getDetranById = (req, res) =>{
  
  const id = parseInt(req.params.id)

  pool.query('select  dd.identity as id, et.description as cnpj, st.description as state, max(case when dd.datacodeid = 1 then dd.description end) as name,   max(case when dd.datacodeid = 2 then dd.description end) as phone,  max(case when dd.datacodeid = 3 then dd.description end) as email, max(case when dd.datacodeid = 7 then dd.description end) as dddModel from data_detran dd, states st, states_relationship sr, entities et where dd."identity" = sr."identity" and st.id = sr.idstate and dd."identity" = et.id  and et.id = $1 group by dd.identity, et.description, st.description order by dd.identity',
  [id],
   (error, storedDetrans) => {
    if (error) {
      console.log(error)
    }
    //console.log(storedDetrans.rows)
    res.status(200).json(storedDetrans.rows)
  })
}

const createDetran = (req, res) => {

  let userData = req.body

  ;(async () => {
    
      const client = await pool.connect()
    try {
      await client.query('BEGIN')
      const selectResponse = await client.query('select * from entities where description = $1 and status = true', 
      [userData.cnpj])
      if(selectResponse.rowCount > 0 ){
        res.status(401).send('CNPJ já cadastrado')
      }else{
        // entities
        const idEntity = await client.query('insert into entities (description, status, datacodeid, entitytypeid) values ($1, true, 5, 1) returning id',
        [userData.cnpj])
        
        // states_realtionship
        client.query('insert into states_relationship (idstate, identity) values ((select id from states where description = $1), $2)',
        [userData.topic,idEntity.rows[0].id])      
        
        // data_detran
        client.query('insert into data_detran (description, identity, datacodeid) values ($1, $2, 1 )',
        [userData.userName, idEntity.rows[0].id])
        client.query('insert into data_detran (description, identity, datacodeid) values ($1, $2, 2 )',
        [userData.phone, idEntity.rows[0].id])
        client.query('insert into data_detran (description, identity, datacodeid) values ($1, $2, 3 )',
        [userData.email, idEntity.rows[0].id])
        client.query('insert into data_detran (description, identity, datacodeid) values ($1, $2, 7 )',
        [userData.dddModel, idEntity.rows[0].id])
        await client.query('COMMIT')

        res.status(200).json({response: "Detran adicionado"})        
      }      
    } catch (e) {
      await client.query('ROLLBACK')
      throw e
    } finally {
      client.release()
    }
  })().catch(e => console.error(e.stack))

  /* let userData = req.body  

  pool.query('select * from entities where description = $1 and status = true',
    [userData.cnpj],
    (error, activeDetran) => {    
      if (error) {
        res.status(400).send('Erro ao buscar detran')
        //throw error        
      } else if(activeDetran.rowCount > 0){
        res.status(401).send('CNPJ já cadastrado')
      }else{   
        // entities
        pool.query('insert into entities (description, status, datacodeid, entitytypeid) values ($1, true, 5, 1) returning id',
        [userData.cnpj], (error, queryResult) =>{
          if(error){
            console.log(error)
            res.status(400).send('Erro ao inserir Detran')
          }else if(queryResult.rowCount == 0){
            res.status(400).send('Nenhum registro inserido, tente novamente mais tarde')
          }else{
            // states_realtionship
            pool.query('insert into states_relationship (idstate, identity) values ((select id from states where description = $1), $2)',
            [userData.topic,queryResult.rows[0].id])      
            
            // data_detran
            pool.query('insert into data_detran (description, identity, datacodeid) values ($1, $2, 1 )',
            [userData.userName, queryResult.rows[0].id])
            pool.query('insert into data_detran (description, identity, datacodeid) values ($1, $2, 2 )',
            [userData.phone, queryResult.rows[0].id])
            pool.query('insert into data_detran (description, identity, datacodeid) values ($1, $2, 3 )',
            [userData.email, queryResult.rows[0].id])
            pool.query('insert into data_detran (description, identity, datacodeid) values ($1, $2, 7 )',
            [userData.dddModel, queryResult.rows[0].id])

            res.status(200).json({response: "Detran adicionado"})       
          }
          
        })           
      }
    }) */
}

const updateDetranById = (req, res) =>{

  let userData = req.body

  //console.log(userData)
  
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
        pool.query('update data_detran set description = $1 where identity = $2 and datacodeid = 7',
        [userData.dddmodel,id])
        pool.query('update entities set description = $1 where id = $2',
        [userData.cnpj,id])
        res.status(200).json({response: "Detran alterado com sucesso"})       
      }

    })
}

const deleteDetranById = (req, res) =>{
  
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
        pool.query('update entities set status = false where id = $1',
        [id])
        res.status(200).json({response: "Detran excluído"})       
      }

    })
}

const getStatesForDetranAdd = (req, res) =>{
  pool.query('select description from states where id not in (select st.id from states st, states_relationship sr, entities et where et.id = sr.identity and et.entitytypeid = 1 and st.id = sr.idstate and status = true)',
   (error, storedStates) => {
    if (error) {
      console.log(error)
    }
    //console.log(storedStates.rows)
    res.status(200).json(storedStates.rows)
  })
}

const getDetranContacts = (req, res) => {

  const id = parseInt(req.params.id)

  pool.query('select  '
            +'	dc.idcontact as id,  	'
            +'	max(case when dc.datacodeid = 1 then dc.description end) as name,   '
            +'	max(case when dc.datacodeid = 7 then dc.description end) as dddModel,   '
            +'	max(case when dc.datacodeid = 2 then dc.description end) as tel,  '
            +'	max(case when dc.datacodeid = 3 then dc.description end) as email,   '
            +'	max(case when dc.datacodeid = 6 then dc.description end) as additionalInfo   '
            +' from data_contact dc, states st, contact_relationship cr, entities et '
            +' where dc.idcontact = cr.id    '
            +'  and et.status = true '
            +'  and et.id = cr.identity'
            +'  and et.id = $1'
            +'  and cr.status = 1'
            +' group by dc.idcontact '
            +' order by dc.idcontact ',
            [id], 
    (error, queryResult) => {
      if (error){
        console.log(error)
        res.status(400).send('Erro ao recuperar os contatos do Detran')
      }else if (queryResult.rowCount == 0){
        res.status(200).send('Nenhum contato cadastrado')
      }else{
        res.status(200).json(queryResult.rows)
      }

  })
}

const getDetranContactById = (req, res) =>{
  const id = parseInt(req.params.id)

  pool.query('select  '
            +'	dc.idcontact as id,  	'
            +'	max(case when dc.datacodeid = 1 then dc.description end) as name,   '
            +'	max(case when dc.datacodeid = 7 then dc.description end) as dddModel,   '
            +'	max(case when dc.datacodeid = 2 then dc.description end) as phone,  '
            +'	max(case when dc.datacodeid = 3 then dc.description end) as email,   '
            +'	max(case when dc.datacodeid = 6 then dc.description end) as additionalInfo   '
            +' from data_contact dc, states st, contact_relationship cr, entities et '
            +' where dc.idcontact = cr.id    '
            +'  and et.status = true '
            +'  and et.id = cr.identity'
            +'  and cr.id = $1'
            +'  and cr.status = 1'
            +' group by dc.idcontact '
            +' order by dc.idcontact ',
            [id], 
    (error, queryResult) => {
      if (error){
        console.log(error)
        res.status(400).send('Erro ao recuperar os contatos do Detran')
      }else if (queryResult.rowCount == 0){
        res.status(200).send('Nenhum contato cadastrado')
      }else{
        res.status(200).json(queryResult.rows)
      }

  })
}

const addDetranContact = (req, res) => {
  let userData = req.body  
  
  const id = parseInt(req.params.id)

  pool.query('select * from entities where description = $1 and status = true',
    [id],
    (error, activeDetran) => {    
      if (error) {
        res.status(400).send('Erro ao buscar detran')
        //throw error        
      } else if(activeDetran.rowCount > 0){
        res.status(401).send('Detran não existe na base de cadastro')
      }else{        
        pool.query('insert into contact_relationship (identity, status) values ($1, 1) returning id',
        [id], (error, queryResult) =>{
          if(error){
            res.status(400).send('Erro ao inserir contato')
          }else if(queryResult.rowCount == 0){
            res.status(401).send('Não foi possível inserir contato na base!')
          }else{
            pool.query('insert into data_contact (description, idcontact, datacodeid) values ($1, $2, 1 )',
            [userData.name,queryResult.rows[0].id])
            pool.query('insert into data_contact (description, idcontact, datacodeid) values ($1, $2, 2 )',
            [userData.phone,queryResult.rows[0].id])
            pool.query('insert into data_contact (description, idcontact, datacodeid) values ($1, $2, 3 )',
            [userData.email,queryResult.rows[0].id])
            pool.query('insert into data_contact (description, idcontact, datacodeid) values ($1, $2, 7 )',
            [userData.dddModel,queryResult.rows[0].id])     
            pool.query('insert into data_contact (description, idcontact, datacodeid) values ($1, $2, 6 )',
            [userData.additionalInfo,queryResult.rows[0].id])            
            res.status(200).json({response: "Contato adicionado ao Detran"}) 
          }
        })              
      }
    })
}


const updateDetranContactById = (req, res) =>{
  let userData = req.body  
  
  const id = parseInt(req.params.id)

  pool.query('select * from contact_relationship where id = $1 and status = 1',
    [id],
    (error, activeContact) => {    
      if (error) {
        res.status(400).send('Erro ao buscar contato')
        //throw error        
      } else if(activeContact.rowCount == 0){
        res.status(401).send('Contato não existe na base de cadastro')
      }else{        
        pool.query('update data_contact set description = $1 where idcontact = $2 and datacodeid = 1',
        [userData.name,id])
        pool.query('update data_contact set description = $1 where idcontact = $2 and datacodeid = 2',
        [userData.phone,id])
        pool.query('update data_contact set description = $1 where idcontact = $2 and datacodeid = 3',
        [userData.email,id])
        pool.query('update data_contact set description = $1 where idcontact = $2 and datacodeid = 7',
        [userData.dddModel,id])     
        pool.query('update data_contact set description = $1 where idcontact = $2 and datacodeid = 6',
        [userData.additionalInfo,id])            
        res.status(200).json({response: "Contato atualizado com sucesso."})           
      }
    })
}

const deleteDetranContactById = (req, res) =>{
    
  const id = parseInt(req.params.id)

  pool.query('select * from contact_relationship where id = $1 and status = 1',
    [id],
    (error, activeContact) => {    
      if (error) {
        res.status(400).send('Erro ao buscar contato')
        //throw error        
      } else if(activeContact.rowCount == 0){
        res.status(401).send('Contato não existe na base de cadastro')
      }else{        
        pool.query('update contact_relationship set status = 0 where id = $1',
        [id], 
        (error, queryResult) =>{
          if(error){
            res.status(400).send('Erro ao deletar contato')
          }else if(queryResult.rowCount == 0){
            res.status(401).send('Não foi possível deletar o contato na base!')
          }else{           
            res.status(200).json({response: "Contato deletado com sucesso"}) 
          }
        })              
      }
    })
}



module.exports = { 
  getDetrans, 
  getDetranById, 
  getStatesForDetranAdd, 
  updateDetranById, 
  deleteDetranById,
  createDetran,
  addDetranContact,
  getDetranContacts,
  getDetranContactById,
  updateDetranContactById,
  deleteDetranContactById,
  }



