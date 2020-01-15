const Pool = require('pg').Pool

const jsonData = require('../../../config/config-database.json');

const pool = new Pool({  
  user: jsonData.user,
  host: jsonData.host,
  database: jsonData.database,
  password: jsonData.password,
  port: jsonData.port,
})

const getCreditorGroup = (req, res) =>{
  
  const gestora = 3
  pool.query("select  dc.identity as id, et.description as cnpj, " +
             "max(case when dc.datacodeid = 8 then dc.description end) as businessname, " +   
             "max(case when dc.datacodeid = 2 then dc.description end) as phone, " +
             "max(case when dc.datacodeid = 3 then dc.description end) as email " +
             "from data_creditor dc " + 
             "inner join entities et " +
             "on dc.identity = et.id " +
             "inner join entity_type ty " + 
             "on et.entitytypeid = ty.id " +
             "inner join states_relationship sr " +
             "on  dc.identity = sr.identity " +
             "inner join states st " +
             "on sr.idstate = st.id " +
             "and st.id = sr.idstate " +
             "where et.status = true " +
             "and ty.id  = $1 " +
             "group by dc.identity, et.description " +
             "order by dc.identity",
   [gestora],
   (error, storedCreditoGroup) => {
    if (error) {
      console.log(error)
     
    } else {
      res.status(200).json(storedCreditoGroup.rows)
    }
  })
}

const getCreditorGroupById = (req, res) =>{

  const identity = parseInt(req.params.id)

  pool.query("select  dc.identity as id, et.description as cnpj, st.description as topic," +
             "max(case when dc.datacodeid = 8 then dc.description end) as businessname, " +   
             "max(case when dc.datacodeid = 9 then dc.description end) as fantasyname, " +   
             "max(case when dc.datacodeid = 7 then dc.description end) as dddmodel, " +   
             "max(case when dc.datacodeid = 2 then dc.description end) as phone, " +  
             "max(case when dc.datacodeid = 3 then dc.description end) as email, " + 
             "max(case when dc.datacodeid = 10 then dc.description end) as address, " + 
             "max(case when dc.datacodeid = 11 then dc.description end) as streetnumber, " + 
             "max(case when dc.datacodeid = 15 then dc.description end) as addresscomplement, " + 
             "max(case when dc.datacodeid = 13 then dc.description end) as district, " + 
             "max(case when dc.datacodeid = 14 then dc.description end) as county, " + 
             "max(case when dc.datacodeid = 12 then dc.description end) as zipcode, " + 
             "max(case when dc.datacodeid = 16 then dc.description end) as contract, " + 
             "max(case when dc.datacodeid = 17 then dc.description end) as startdate, " + 
             "max(case when dc.datacodeid = 18 then dc.description end) as enddate " + 
             "from data_creditor dc " +
             "inner join states_relationship sr " +
             "on  dc.identity = sr.identity " +
             "inner join states st " +
             "on st.id = sr.idstate " +
             "inner join entities et " + 
             "on dc.identity = et.id " +
             "where et.id = $1 " +
             "group by dc.identity, et.description, st.description " + 
             "order by dc.identity",
  [identity],
   (error, storedCreditoGroup) => {
    if (error) {
      console.log(error)
    } else {
      res.status(200).json(storedCreditoGroup.rows)
    }
  })
}

const createCreditorGroup = async function (req, res) {
  let userData = req.body;  

  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    const state = await client.query('select id from states where description = $1', [userData.topic]);
    const idstate = state.rows[0].id;

    
    const cnpj = 5;
    const credora = 3;
    const entitiesSql = "insert into entities (description, status, datacodeid, entitytypeid) values ($1, $2, $3, $4) returning id";
    const entitiesValues = [userData.cnpj, true, cnpj, credora];
    const entity = await client.query(entitiesSql, entitiesValues);
    const identity = entity.rows[0].id;
        
    const states_relationshipSql = "insert into states_relationship (idstate, identity) values ($1, $2)";
    const states_relationshipValues = [idstate,  identity];
    await client.query(states_relationshipSql, states_relationshipValues);      
        
    const data_creditorSql = "insert into data_creditor (description, identity, datacodeid) values ($1, $2, $3)";

    var data_creditorValues = [userData.businessname, identity,  8]; 
    await client.query(data_creditorSql, data_creditorValues);
        
    data_creditorValues = [userData.fantasyname, identity,  9]; 
    await client.query(data_creditorSql, data_creditorValues);
        
    data_creditorValues = [userData.dddmodel, identity, 7]; 
    await client.query(data_creditorSql, data_creditorValues);
        
    data_creditorValues = [userData.phone, identity, 2]; 
    await client.query(data_creditorSql, data_creditorValues);
        
    data_creditorValues = [userData.email, identity, 3]; 
    await client.query(data_creditorSql, data_creditorValues);
    
    data_creditorValues = [userData.address, identity, 10]; 
    await client.query(data_creditorSql, data_creditorValues);
    
    data_creditorValues = [userData.streetnumber, identity, 11]; 
    await client.query(data_creditorSql, data_creditorValues);
    
    data_creditorValues = [userData.addresscomplement, identity, 15]; 
    await client.query(data_creditorSql, data_creditorValues);
    
    data_creditorValues = [userData.district, identity, 13]; 
    await client.query(data_creditorSql, data_creditorValues);
    
    data_creditorValues = [userData.county, identity, 14]; 
    await client.query(data_creditorSql, data_creditorValues);
    
    data_creditorValues = [userData.zipcode, identity, 12]; 
    await client.query(data_creditorSql, data_creditorValues);
    
    data_creditorValues = [userData.contract, identity, 16]; 
    await client.query(data_creditorSql, data_creditorValues);
    
    data_creditorValues = [userData.startdate, identity, 17]; 
    await client.query(data_creditorSql, data_creditorValues);
    
    data_creditorValues = [userData.enddate, identity, 18];
    await client.query(data_creditorSql, data_creditorValues);
    
    await client.query('COMMIT');
    res.status(200).json({response: "Gestora adicionada"});
  } catch (e) {
    await client.query('ROLLBACK');
    res.status(400).json({response: "Error inserindo a Gestora"});
    throw e;
  } finally {
    client.release();
  }
}

const updateCreditorGroupById = async function (req, res) {

  let userData = req.body;  
  const identity = parseInt(req.params.id)

  const client = await pool.connect()
  try {
    await client.query('BEGIN')
  
    const state = await client.query('select id from states where description = $1', [userData.topic]);
    const idstate = state.rows[0].id;

    const entitiesSql = "update entities set description = $1, status = true where id = $2;";
    const entitiesValues = [userData.cnpj, identity];
    await client.query(entitiesSql, entitiesValues);
 
    const states_relationshipSql = "update states_relationship set idstate = $1 where identity = $2;";
    const states_relationshipValues = [idstate, identity];
    await client.query(states_relationshipSql, states_relationshipValues);      

    const data_creditorSql = "update data_creditor set description = $1 where identity = $2 and datacodeid = $3;";

    var data_creditorValues = [userData.businessname, identity,  8]; 
    await client.query(data_creditorSql, data_creditorValues);

    data_creditorValues = [userData.fantasyname, identity,  9]; 
    await client.query(data_creditorSql, data_creditorValues);

    data_creditorValues = [userData.dddmodel, identity, 7]; 
    await client.query(data_creditorSql, data_creditorValues);

    data_creditorValues = [userData.phone, identity, 2]; 
    await client.query(data_creditorSql, data_creditorValues);

    data_creditorValues = [userData.email, identity, 3]; 
    await client.query(data_creditorSql, data_creditorValues);

    data_creditorValues = [userData.address, identity, 10]; 
    await client.query(data_creditorSql, data_creditorValues);

    data_creditorValues = [userData.streetnumber, identity, 11]; 
    await client.query(data_creditorSql, data_creditorValues);

    data_creditorValues = [userData.addresscomplement, identity, 15]; 
    await client.query(data_creditorSql, data_creditorValues);

    data_creditorValues = [userData.district, identity, 13]; 
    await client.query(data_creditorSql, data_creditorValues);

    data_creditorValues = [userData.county, identity, 14]; 
    await client.query(data_creditorSql, data_creditorValues);

    data_creditorValues = [userData.zipcode, identity, 12]; 
    await client.query(data_creditorSql, data_creditorValues);

    data_creditorValues = [userData.contract, identity, 16]; 
    await client.query(data_creditorSql, data_creditorValues);

    data_creditorValues = [userData.startdate, identity, 17]; 
    await client.query(data_creditorSql, data_creditorValues);

    data_creditorValues = [userData.enddate, identity, 18];
    await client.query(data_creditorSql, data_creditorValues);

    await client.query('COMMIT');
    res.status(200).json({response: "Gestora atualizada"});
  } catch (e) {
    await client.query('ROLLBACK');
    res.status(400).json({response: "Erro atualizando a Gestora"});
    throw e;
  } finally {
    client.release();
  }
}

const deleteCreditorGroupById = (req, res) =>{
  
  const id = parseInt(req.params.id)

  pool.query('update entities set status = false where id = $1',
        [id])
  res.status(200).json({response: "Gestora excluída"})
}


const getCreditorGroupContacts = (req, res) => {

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
        res.status(400).send('Erro ao recuperar os contatos da Gestora')
      }else if (queryResult.rowCount == 0){
        res.status(200).send('Nenhum contato cadastrado')
      }else{
        res.status(200).json(queryResult.rows)
      }

  })
}

const getCreditorGroupContactById = (req, res) =>{
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
        res.status(400).send('Erro ao recuperar os contatos da Gestora')
      }else if (queryResult.rowCount == 0){
        res.status(200).send('Nenhum contato cadastrado')
      }else{
        res.status(200).json(queryResult.rows)
      }

  })
}

const addCreditorGroupContact = (req, res) => {
  let userData = req.body  
  const id = parseInt(req.params.id)

  pool.query('select * from entities where description = $1 and status = true',
    [id],
    (error, activeCreditor) => {    
      if (error) {
        res.status(400).send('Erro ao buscar credora')
        throw error        
      } else if(activeCreditor.rowCount > 0){
        res.status(401).send('Credora não existe na base de cadastro')
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
            res.status(200).json({response: "Contato adicionado a Gestora"}) 
          }
        })              
      }
    })
}

const updateCreditorGroupContactById = (req, res) =>{
  let userData = req.body  
 
  const id = parseInt(req.params.id)

  pool.query('select * from contact_relationship where id = $1 and status = 1',
    [id],
    (error, activeContact) => {    
      if (error) {
        res.status(400).send('Erro ao buscar contato')
        throw error        
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

const deleteCreditorGroupContactById = (req, res) =>{
   
  const id = parseInt(req.params.id)

  pool.query('select * from contact_relationship where id = $1 and status = 1',
    [id],
    (error, activeContact) => {    
      if (error) {
        res.status(400).send('Erro ao buscar contato')
        throw error        
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
  getCreditorGroup,
  getCreditorGroupById, 
  updateCreditorGroupById, 
  createCreditorGroup,
  deleteCreditorGroupById,
  getCreditorGroupContacts,
  getCreditorGroupContactById,
  addCreditorGroupContact,
  updateCreditorGroupContactById,
  deleteCreditorGroupContactById
}