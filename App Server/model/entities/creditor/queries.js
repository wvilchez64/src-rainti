const Pool = require('pg').Pool

const jsonData = require('../../../config/config-database.json');

const pool = new Pool({  
  user: jsonData.user,
  host: jsonData.host,
  database: jsonData.database,
  password: jsonData.password,
  port: jsonData.port,
})

const getCreditor = (req, res) =>{
  const credora = 2;
  pool.query("select  dc.identity as id, et.description as cnpj, " +
             "max(case when dc.datacodeid = 8 then dc.description end) as name, " +   
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
   [credora],
   (error, storedCreditor) => {
    if (error) {
      console.log(error)     
    } else {
      res.status(200).json(storedCreditor.rows)
    }
  })
}


const getCreditorsGroup = (req, res) =>{
  const gestora = 3;
  const razaoSocial = 8;
  pool.query("select et.id as id, et.entitytypeid as entitytypeid, dc.description as description, false as checked " +
             "from data_creditor dc " +
             "inner join entities et " +
             "on dc.identity = et.id " +
             "inner join entity_type ty " +
             "on et.entitytypeid = ty.id " +
             "where et.status = true " +
             "and dc.datacodeid = $2 " +
             "and ty.id  = $1 " +
             "order by et.id ",
   [gestora, razaoSocial],
   (error, groupCreditors) => {
    if (error) {
      console.log(error)     
    } else {
      res.status(200).json(groupCreditors.rows)
    }
  })
}

const getDetrans = (req, res) =>{
  const detran = 1;
  const nome = 1;
  pool.query("select et.id as id, et.entitytypeid as entitytypeid, dc.description as description, false as checked " +
             "from data_detran dc " +
             "inner join entities et " +
             "on dc.identity = et.id " +
             "inner join entity_type ty " +
             "on et.entitytypeid = ty.id " +
             "where et.status = true " +
             "and dc.datacodeid = $2 " +
             "and ty.id  = $1 " +
             "order by et.id ",
   [detran, nome],
   (error, storedDetrans) => {
    if (error) {
      console.log(error)     
    } else {
      res.status(200).json(storedDetrans.rows)
    }
  })
}

const getCreditorsGroupById = (req, res) =>{  
  const identity = parseInt(req.params.id);
  const gestora = 3;
  const razaoSocial = 8;  
  pool.query("select et.id as id, et.entitytypeid as entitytypeid, dc.description as description, case when er.firstentity is null then false else true end as checked " +
             "from data_creditor dc " +
             "inner join entities et " +
             "on dc.identity = et.id " +
             "inner join entity_type ty " +
             "on et.entitytypeid = ty.id " +
             "left join entities_relationship er " +
			       "on er.firstentity = $1" +
             "and er.secondentity = et.id " +
             "where et.status = true " +
             "and dc.datacodeid = $3 " +
             "and ty.id  = $2 " +
             "order by et.id ",
   [identity, gestora, razaoSocial],
   (error, groupCreditors) => {
    if (error) {
      console.log(error)     
    } else {
      res.status(200).json(groupCreditors.rows)
    }
  })
}

const getDetransById = (req, res) =>{
  const identity = parseInt(req.params.id);
  const detran = 1;
  const nome = 1;

  pool.query("select et.id as id, et.entitytypeid as entitytypeid, dc.description as description, case when er.firstentity is null then false else true end as checked " +
             "from data_detran dc " +
             "inner join entities et " +
             "on dc.identity = et.id " +
             "inner join entity_type ty " +
             "on et.entitytypeid = ty.id " +
             "left join entities_relationship er " +
             "on er.firstentity = $1" +
             "and er.secondentity = et.id " +
             "where et.status = true " +
             "and dc.datacodeid = $3 " +
             "and ty.id  = $2 " +
             "order by et.id ",
   [identity, detran, nome],
   (error, storedDetrans) => {
    if (error) {
      console.log(error)     
    } else {
      res.status(200).json(storedDetrans.rows)
    }
  })
}

const getCreditorById = (req, res) =>{

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
   (error, storedCreditor) => {
    if (error) {
      console.log(error)
    } else {
      res.status(200).json(storedCreditor.rows)
    }
  })
}


const createCreditor = async function (req, res) {
  let userData = req.body;  

  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    const state = await client.query('select id from states where description = $1', [userData.topic]);
    const idstate = state.rows[0].id;

    
    const cnpj = 5;
    const credora = 2;
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

    const entities_relationshipSql = "insert into entities_relationship (firstentity, secondentity) values ($1, $2)";
    var entities_relationshipValues = [];
    
    var i; 
    for (i = 0; i < userData.entities.length; i++) {
       entities_relationshipValues = [userData.entities[i].id, identity]
      await client.query(entities_relationshipSql, entities_relationshipValues);
    } 
         
    
    await client.query('COMMIT');
    res.status(200).json({response: "Credora adicionada"});
  } catch (e) {
    await client.query('ROLLBACK');
    res.status(400).json({response: "Error inserindo Credora"});
    throw e;
  } finally {
    client.release();
  }
}

const createLog = function (id, columns, req) {
  var dataValuesNew = Object.values(req.new)
  var dataValuesOld = Object.values(req.old)
  console.log(dataValuesNew, dataValuesOld)
  var propertyName
  var log={}
  let i = 0
  let isChanged = false
  dataValuesOld.forEach(value => {
    propertyName = columns[i]
    if (i == id) {
      log[propertyName] = value
    }
    if (JSON.stringify(value) != JSON.stringify(dataValuesNew[i])) {
      isChanged = true
      log[propertyName] = {
        OldValue : value,
        NewValue : dataValuesNew[i]
      }
    }
    i++
  })   
  logResult = isChanged ? log : {}
  return logResult

}

const updateCreditorById = async function (req, res) {
  /* */
  let columns = Object.getOwnPropertyNames(req.body.new)
  columns = ['iD', 'cnpj', 'estado', 'razão social', 'nome fantasia', 'ddd', 'tel', 'email', 'logradouro', 'número do logradouro', 'complemento endereço', 'bairro', 'munícipio', 'cep', 'contrato', 'data inicio',  'data final', 'entidades']
  //null o id nao e' parte do log, ao contrario mandar a posicao onde esta o Id
  log = createLog(0, columns, req.body)
  console.log(log)
  
  let userData = req.body;  
  const identity = parseInt(req.params.id)

  // const client = await pool.connect()
  // try {
  //   await client.query('BEGIN')

  //   const state = await client.query('select id from states where description = $1', [userData.topic]);
  //   const idstate = state.rows[0].id;

  //   const entitiesSql = "update entities set description = $1, status = true where id = $2;";
  //   const entitiesValues = [userData.cnpj, identity];
  //   await client.query(entitiesSql, entitiesValues);

  //   const states_relationshipSql = "update states_relationship set idstate = $1 where identity = $2;";
  //   const states_relationshipValues = [idstate, identity];
  //   await client.query(states_relationshipSql, states_relationshipValues);      

  //   const data_creditorSql = "update data_creditor set description = $1 where identity = $2 and datacodeid = $3;";

  //   var data_creditorValues = [userData.businessname, identity,  8]; 
  //   await client.query(data_creditorSql, data_creditorValues);

  //   data_creditorValues = [userData.fantasyname, identity,  9]; 
  //   await client.query(data_creditorSql, data_creditorValues);

  //   data_creditorValues = [userData.dddmodel, identity, 7]; 
  //   await client.query(data_creditorSql, data_creditorValues);

  //   data_creditorValues = [userData.phone, identity, 2]; 
  //   await client.query(data_creditorSql, data_creditorValues);

  //   data_creditorValues = [userData.email, identity, 3]; 
  //   await client.query(data_creditorSql, data_creditorValues);

  //   data_creditorValues = [userData.address, identity, 10]; 
  //   await client.query(data_creditorSql, data_creditorValues);

  //   data_creditorValues = [userData.streetnumber, identity, 11]; 
  //   await client.query(data_creditorSql, data_creditorValues);

  //   data_creditorValues = [userData.addresscomplement, identity, 15]; 
  //   await client.query(data_creditorSql, data_creditorValues);

  //   data_creditorValues = [userData.district, identity, 13]; 
  //   await client.query(data_creditorSql, data_creditorValues);

  //   data_creditorValues = [userData.county, identity, 14]; 
  //   await client.query(data_creditorSql, data_creditorValues);

  //   data_creditorValues = [userData.zipcode, identity, 12]; 
  //   await client.query(data_creditorSql, data_creditorValues);

  //   data_creditorValues = [userData.contract, identity, 16]; 
  //   await client.query(data_creditorSql, data_creditorValues);

  //   data_creditorValues = [userData.startdate, identity, 17]; 
  //   await client.query(data_creditorSql, data_creditorValues);

  //   data_creditorValues = [userData.enddate, identity, 18];
  //   await client.query(data_creditorSql, data_creditorValues);

  //   var entities_relationshipSql = "delete from entities_relationship where firstentity = $1";
  //   var entities_relationshipValues = [identity];
  //   await client.query(entities_relationshipSql, entities_relationshipValues);

  //   entities_relationshipSql = "insert into entities_relationship (firstentity, secondentity) values ($1, $2)";
  //   entities_relationshipValues = [];

  //   var i; 
  //   for (i = 0; i < userData.entities.length; i++) {
  //     entities_relationshipValues = [userData.entities[i].id, identity]
  //     await client.query(entities_relationshipSql, entities_relationshipValues);
  //   } 

  //   await client.query('COMMIT');
  //   res.status(200).json({
  //     response: "Credora atualizada"});
  // } catch (e) {
  //   await client.query('ROLLBACK');
  //   res.status(400).json({response: "Erro atualizando Credora"});
  //   throw e;
  // } finally {
  //   client.release();
  // }
}

const deleteCreditorById = (req, res) =>{
  
  const id = parseInt(req.params.id)

  pool.query('update entities set status = false where id = $1',
        [id])
  res.status(200).json({response: "Credora excluída"})
}


const getCreditorContacts = (req, res) => {

  const id = parseInt(req.params.id)

  pool.query('select dc.idcontact as id, '
            +'	max(case when dc.datacodeid = 1 then dc.description end) as name,   '
            +'	max(case when dc.datacodeid = 7 then dc.description end) as dddModel,   '
            +'	max(case when dc.datacodeid = 2 then dc.description end) as tel,  '
            +'	max(case when dc.datacodeid = 3 then dc.description end) as email,   '
            +'	max(case when dc.datacodeid = 6 then dc.description end) as additionalInfo   '
            +' from data_contact dc, states st, contact_relationship cr, entities et'
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
        res.status(400).send('Erro ao recuperar os contatos da Credora')
      }else if (queryResult.rowCount == 0){
        res.status(200).send('Nenhum contato cadastrado')
      }else{
        res.status(200).json(queryResult.rows)
      }

  })
}

const getCreditorContactById = (req, res) =>{
  const id = parseInt(req.params.id)

  pool.query('select dc.idcontact as id,  	'
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
        res.status(400).send('Erro ao recuperar os contatos da Credora')
      }else if (queryResult.rowCount == 0){
        res.status(200).send('Nenhum contato cadastrado')
      }else{
        res.status(200).json(queryResult.rows)
      }

  })
}

const addCreditorContact = (req, res) => {
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
            res.status(200).json({response: "Contato adicionado a Credora"}) 
          }
        })              
      }
    })
}

const updateCreditorContactById = (req, res) =>{
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

const deleteCreditorContactById = (req, res) =>{
   
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
  getCreditor, 
  getCreditorById, 
  updateCreditorById, 
  createCreditor,
  deleteCreditorById,
  getCreditorContacts,
  getCreditorContactById,
  addCreditorContact,
  updateCreditorContactById,
  deleteCreditorContactById,
  getCreditorsGroup,
  getDetrans,
  getDetransById,
  getCreditorsGroupById
  }