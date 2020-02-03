const https = require('https');
const Pool = require('pg').Pool

const jsonData = require('../../config/config-database.json');

const pool = new Pool({  
  user: jsonData.user,
  host: jsonData.host,
  database: jsonData.database,
  password: jsonData.password,
  port: jsonData.port,
})

const getContract = (req, res) =>{
  const datagroupcodeid = 5;
  const contrato = 53;
  const dataContrato = 54;
  const detran = 88;
  const nomeFantasia = 8
  
  pool.query("select a.idContract as contractRegisterID, d.description as name, b.description as detran, a.contract, a.contractDate " +
             "from (select a.idContract, " +
             "max(case when b.id = 88 then a.description end)::int as detranId, " +
             "max(case when b.id = 53 then a.description end) as contract, " +
             "max(case when b.id = 54 then a.description end) as contractDate " +
             "FROM data_contract a " +
             "inner join data_code b " +
             "on   a.datacodeid = b.id " +
             "where b.datagroupcodeid = $1 " +
             "and   b.id in ($2, $3, $4) " +
             "group by a.idcontract " +
             ") as a " +
             "inner join data_detran b " +
             "on detranId = b.id " +
             "inner join contract_relationship c " +
             "on   a.idcontract = c.id " +
             "inner join data_creditor d " +
             "on   c.identity = d.identity " +
             "where d.datacodeid = $5",
   [datagroupcodeid, contrato, dataContrato, detran, nomeFantasia],
   (error, storedContract) => {
    if (error) {
      console.log(error)     
    } else {
      res.status(200).json(storedContract.rows)
    }
  })
}

const getContractById = (req, res) =>{

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
             "from data_contract dc " +
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
   (error, storedContract) => {
    if (error) {
      console.log(error)
    } else {
      res.status(200).json(storedContract.rows)
    }
  })
}


const createContract = async function (req, res) {
  let contractData = req.body;  
  const client = await pool.connect()
  try {
    await client.query('BEGIN')

    const contract_relationshipSql = "insert into contract_relationship (identity) values ($1) returning id";
    const contract_relationshipValues = [contractData.creditorId];
    const contract = await client.query(contract_relationshipSql, contract_relationshipValues);
    const contractId = contract.rows[0].id;                      
    
    const contractDataSql = "insert into data_Contract (description, idContract, datacodeId) values ($1, $2, $3)";
    var contractDataArray = []
    //code_group_id 5 CONTRATO
    contractDataArray.push(contractData.contract, 53) //CONTRATO
    contractDataArray.push(contractData.contractDate, 54) //DATA DO CONTRATO
    contractDataArray.push(contractData.alienTypeId, 55) //TIPO DE GRAVAME
    contractDataArray.push(contractData.restrictionNumber, 56) //NÚMERO DA RESTRIÇÃO
    contractDataArray.push(contractData.totalDebitAmount, 57) //VALOR FINANCIAMENTO
    contractDataArray.push(contractData.numberOfInstallments, 58) //PARCELAS
    contractDataArray.push(contractData.installmentValue, 59) //VALOR DA PARCELA
    contractDataArray.push(contractData.iofAmount, 60) //VALOR DO IOF
    contractDataArray.push(contractData.contractRegistrationAmount, 61) //VALOR DO REGISTRO DE CONTRATO
    contractDataArray.push(contractData.interestRatePerMonth, 62) //TAXA JUROS AO MÊS
    contractDataArray.push(contractData.interestRatePerYear, 63) //TAXA JUROS AO ANO
    contractDataArray.push(contractData.interestRate, 64) //TAXA JUROS DE MULTA
    contractDataArray.push(contractData.dailyInterestRate, 65) //TAXA DE MORA AO DIA
    contractDataArray.push(contractData.indexId, 66) //INDICE
    contractDataArray.push(contractData.paymentStartDate, 67) //DATA PRIMER PAGAMENTO
    contractDataArray.push(contractData.paymentEndDate, 68) //DATA ULTIMO PAGAMENTO
    contractDataArray.push(contractData.releaseDate, 69) //DATA DA LIBERAÇÃO
    contractDataArray.push(contractData.releaseStateId, 70) //UF DA LIBERAÇÃO
    contractDataArray.push(contractData.releaseCity, 71) //CIDADE DA LIBERAÇÃO
    contractDataArray.push(contractData.consortiumGroupNumber, 72) //NÚMERO GRUPO DO CONSÓRCIO
    contractDataArray.push(contractData.consortiumQuotaNumber, 73) //NÚMERO. COTA DO CONSÓRCIO
    contractDataArray.push(contractData.detranId, 88) //DETRAN
    //code_group_id 3 DEVEDOR
    contractDataArray.push(contractData.buyerName, 26) // NOME
    contractDataArray.push(contractData.buyerEmail, 27) // EMAIL
    if (contractData.buyerType == 'cpf') {
      contractDataArray.push(contractData.buyerValue, 28) // CPF
    } else {
      contractDataArray.push(contractData.buyerValue, 29) // CNPJ
    }
    contractDataArray.push(contractData.buyerPhone, 30) // TELEFONE
    contractDataArray.push(contractData.buyerDddPhone, 31) // DDD TELEFONE
    contractDataArray.push(contractData.buyerMobile, 32) // CELULAR
    contractDataArray.push(contractData.buyerDddMobile, 33) // DDD CELULAR
    contractDataArray.push(contractData.buyerAddress, 34) // LOGRADOURO
    contractDataArray.push(contractData.buyerStreetnumber, 35) // NÚMERO DO LOGRADOURO
    contractDataArray.push(contractData.buyerAddresscomplement, 36) // COMPLEMENTO ENDEREÇO
    contractDataArray.push(contractData.buyerDistrict, 37) // BARRIO
    contractDataArray.push(contractData.buyerCounty, 38) // MUNICIPIO
    contractDataArray.push(contractData.buyerStateId, 39) // ESTADO
    contractDataArray.push(contractData.buyerZipCode, 40) // CEP
    //code_group_id 2 VEICULO
    contractDataArray.push(contractData.chassi, 41) // CHASSI
    contractDataArray.push(contractData.remarkedChassi, 42) // CHASSI REMARCADO
    contractDataArray.push(contractData.plate, 43) // PLACA
    contractDataArray.push(contractData.plateStateId, 44) // UF DA PLACA
    contractDataArray.push(contractData.renavam, 45) // RENAVAN
    contractDataArray.push(contractData.licensingStateId, 46) // UF LICENCIAMENTO
    contractDataArray.push(contractData.specieId, 47) // ESPÉCIE
    contractDataArray.push(contractData.fabricationYear, 48) // ANO DE FABRICAÇÃO
    contractDataArray.push(contractData.brand, 50) // MARCA
    contractDataArray.push(contractData.model, 51) // MODELO
    contractDataArray.push(contractData.modelYear, 49) // ANO DO MODELO
    contractDataArray.push(contractData.color, 52) // COR
    //code_group_id 4 GARANTIDOR
    contractDataArray.push(contractData.guarantor, 74) // NOME DO GARANTIDOR
    if (contractData.guarantorType == 'cpf') {
      contractDataArray.push(contractData.guarantorValue, 75) // CPF
    } else {
      contractDataArray.push(contractData.guarantorValue, 76) // CNPJ
    }
    var contractDataValues = []
    var i; 
    for (i = 0; i < contractDataArray.length; i += 2) {
      contractDataValues = [contractDataArray[i], contractId, contractDataArray[i+1]]
      await client.query(contractDataSql, contractDataValues);
    }
    await client.query('COMMIT');
    res.status(200).json({response: "Contrato adicionado"});
  } catch (e) {
    await client.query('ROLLBACK');
    res.status(400).json({response: "Error inserindo Contrato"});
    throw e;
  } finally {
    client.release();
  }
}


const updateContractById = async function (req, res) {
  
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

    const data_ContractSql = "update data_Contract set description = $1 where identity = $2 and datacodeid = $3;";

    var data_ContractValues = [userData.businessname, identity,  8]; 
    await client.query(data_ContractSql, data_ContractValues);

    data_ContractValues = [userData.fantasyname, identity,  9]; 
    await client.query(data_ContractSql, data_ContractValues);

    data_ContractValues = [userData.dddmodel, identity, 7]; 
    await client.query(data_ContractSql, data_ContractValues);

    data_ContractValues = [userData.phone, identity, 2]; 
    await client.query(data_ContractSql, data_ContractValues);

    data_ContractValues = [userData.email, identity, 3]; 
    await client.query(data_ContractSql, data_ContractValues);

    data_ContractValues = [userData.address, identity, 10]; 
    await client.query(data_ContractSql, data_ContractValues);

    data_ContractValues = [userData.streetnumber, identity, 11]; 
    await client.query(data_ContractSql, data_ContractValues);

    data_ContractValues = [userData.addresscomplement, identity, 15]; 
    await client.query(data_ContractSql, data_ContractValues);

    data_ContractValues = [userData.district, identity, 13]; 
    await client.query(data_ContractSql, data_ContractValues);

    data_ContractValues = [userData.county, identity, 14]; 
    await client.query(data_ContractSql, data_ContractValues);

    data_ContractValues = [userData.zipcode, identity, 12]; 
    await client.query(data_ContractSql, data_ContractValues);

    data_ContractValues = [userData.contract, identity, 16]; 
    await client.query(data_ContractSql, data_ContractValues);

    data_ContractValues = [userData.startdate, identity, 17]; 
    await client.query(data_ContractSql, data_ContractValues);

    data_ContractValues = [userData.enddate, identity, 18];
    await client.query(data_ContractSql, data_ContractValues);

    var entities_relationshipSql = "delete from entities_relationship where firstentity = $1";
    var entities_relationshipValues = [identity];
    await client.query(entities_relationshipSql, entities_relationshipValues);

    entities_relationshipSql = "insert into entities_relationship (firstentity, secondentity) values ($1, $2)";
    entities_relationshipValues = [];

    var i; 
    for (i = 0; i < userData.entities.length; i++) {
      entities_relationshipValues = [userData.entities[i].id, identity]
      await client.query(entities_relationshipSql, entities_relationshipValues);
    } 

    await client.query('COMMIT');
    res.status(200).json({
      response: "Credora atualizada"});
  } catch (e) {
    await client.query('ROLLBACK');
    res.status(400).json({response: "Erro atualizando Credora"});
    throw e;
  } finally {
    client.release();
  }
}

const deleteContractById = (req, res) =>{
  
  const id = parseInt(req.params.id)

  pool.query('update entities set status = false where id = $1',
        [id])
  res.status(200).json({response: "Contrato excluído"})
}

const getCreditors = (req, res) =>{

  const credora = 2;
  const nomeFantasia = 8;  
  pool.query("select et.id as id, dc.description as description " +
             "from data_creditor dc " +
             "inner join entities et " + 
             "on dc.identity = et.id " +  
             "inner join entity_type ty " +  
             "on et.entitytypeid = ty.id " +  
             "where et.status = true " +  
             "and dc.datacodeid = $2 " +
             "and ty.id = $1 " +
             "order by et.id ",
   [credora, nomeFantasia],
   (error, credoras) => {
    if (error) {
      console.log(error)     
    } else {
      res.status(200).json(credoras.rows)
    }
  })
}

const getCreditorsById = (req, res) =>{  
  const id = parseInt(req.params.id);
  const credora = 2;
  const nomeFantasia = 8;  
  pool.query("select et.id as id, dc.description as description " +
             "from data_creditor dc " +
             "inner join entities et " + 
             "on dc.identity = et.id " +  
             "inner join entity_type ty " +  
             "on et.entitytypeid = ty.id " +  
             "where et.status = true " +  
             "and dc.datacodeid = $3 " +
             "and ty.id = $2 " +
             "and dc.id = $1 " +
             "order by et.id ",
   [id, credora, nomeFantasia],
   (error, credoras) => {
    if (error) {
      console.log(error)     
    } else {
      res.status(200).json(credoras.rows)
    }
  })
}

const getDetrans = (req, res) =>{
  const detran = 1;
  const nome = 1;
  pool.query("select et.id as id, dc.description as description " +
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
   (error, detrans) => {
    if (error) {
      console.log(error)     
    } else {
      res.status(200).json(detrans.rows)
    }
  })
}


const getDetransById = (req, res) =>{
  const id = parseInt(req.params.id);
  const detran = 1;
  const nome = 1;

  pool.query("select et.id as id, dc.description as description " +
             "from data_detran dc " +
             "inner join entities et " + 
             "on dc.identity = et.id " +  
             "inner join entity_type ty " +  
             "on et.entitytypeid = ty.id " +  
             "where et.status = true " +  
             "and dc.datacodeid = $3 " +
             "and ty.id = $2 " +
             "and dc.id = $1 " +
             "order by et.id ",
   [id, detran, nome],
   (error, detrans) => {
    if (error) {
      console.log(error)     
    } else {
      res.status(200).json(detrans.rows)
    }
  })
}

const getAlienTypes = (req, res) =>{
  const gravame = 1;

  pool.query("select dc.id as id, dc.description as description, dc.datagroupcodeid as datagroupcodeid " +
             "from data_code dc " +
             "where dc.datagroupcodeid = $1 " +
             "order by dc.id ",
   [gravame],
   (error, gravames) => {
    if (error) {
      console.log(error)     
    } else {
      res.status(200).json(gravames.rows)
    }
  })
}

  const getAlienTypesById = (req, res) =>{
    const gravame = 1;
    const id = parseInt(req.params.id);

    pool.query("select dc.id as id, dc.description as description, dc.datagroupcodeid as datagroupcodeid " +
               "from data_code dc " +
               "where dc.datagroupcodeid = $1 " +
               "and  dc.id = $2 " +
               "order by dc.id ",
    [gravame, id],
    (error, gravames) => {
      if (error) {
        console.log(error)     
      } else {
        res.status(200).json(gravames.rows)
      }
    })
  }

  const getIndexes = (req, res) =>{
    const indice = 6;
  
    pool.query("select dc.id as id, dc.description as description, dc.datagroupcodeid as datagroupcodeid " +
               "from data_code dc " +
               "where dc.datagroupcodeid = $1 " +
               "order by dc.id ",
     [indice],
     (error, indices) => {
      if (error) {
        console.log(error)     
      } else {
        res.status(200).json(indices.rows)
    }
  })
}  
  
  const getIndexesById = (req, res) =>{
    const indice = 6;
    const id = parseInt(req.params.id);
  
    pool.query("select dc.id as id, dc.description as description, dc.datagroupcodeid as datagroupcodeid " +
              "from data_code dc " +
              "where dc.datagroupcodeid = $1 " +
              "and  dc.id = $2 " +
              "order by dc.id ",
    [indice, id],
    (error, indices) => {
      if (error) {
        console.log(error)     
      } else {
        res.status(200).json(indices.rows)
      }
    })
  }

  const getSpecies = (req, res) =>{
    const especie = 7;
    
    pool.query("select dc.id as id, dc.description as description, dc.datagroupcodeid as datagroupcodeid " +
              "from data_code dc " +
              "where dc.datagroupcodeid = $1 " +
              "order by dc.id ",
    [especie],
    (error, especies) => {
      if (error) {
        console.log(error)     
      } else {
        res.status(200).json(especies.rows)
      }
    })
  }

  const getSpeciesById = (req, res) =>{
    const especie = 7;
    const id = parseInt(req.params.id);
  
    pool.query("select dc.id as id, dc.description as description, dc.datagroupcodeid as datagroupcodeid " +
              "from data_code dc " +
              "where dc.datagroupcodeid = $1 " +
              "and  dc.id = $2 " +
              "order by dc.id ",
    [especie, id],
    (error, especies) => {
      if (error) {
        console.log(error)     
      } else {
        res.status(200).json(especies.rows)
      }
    })
  }

  const getYears = (req, res) =>{
    const yearFrom = (new Date().getFullYear()) - 19
    pool.query("select cast(y.years as text) as description from (select generate_series($1, extract(year from now() + interval '1 year')::int) as years) as y order by years desc", 
    [yearFrom],
    (error, years) => {
      if (error) {
        console.log(error)     
      } else {
        res.status(200).json(years.rows)
      }
    })
  }

  const getBrands = (req, res) =>{
    
    https.get('https://fipeapi.appspot.com/api/1/carros/marcas.json', (resp) => {
      let data = '';
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        values = JSON.parse(data)
        brands = values.map(a => {return {id : a.id, description : a.name}})
        res.status(200).json(brands);
      });
    
      }).on("error", (err) => {
        console.log(err.message);
      });

  }

  const getModelsById = (req, res) =>{
    const id = parseInt(req.params.id)
    https.get('https://fipeapi.appspot.com/api/1/carros/veiculos/'+ id +'.json', (resp) => {
      let data = '';
    
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        values = JSON.parse(data)
        models = values.map(a => {return {id : a.id, description : a.name}})
        res.status(200).json(models);
      });
    
      }).on("error", (err) => {
        console.log(err.message);
      });
  }

  const getModelYearsByIds = (req, res) =>{
    const brandId = parseInt(req.params.brandId)
    const modelId = parseInt(req.params.modelId)
    https.get('https://fipeapi.appspot.com/api/1/carros/veiculo/'+brandId+'/'+modelId+'.json', (resp) => {
      let data = '';
    
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        values = JSON.parse(data)
        modelYears = values.map(a => {return {description : a.id}})
        res.status(200).json(modelYears);
      });
    
      }).on("error", (err) => {
        console.log(err.message);
      });
  }
  
  module.exports = { 
  getContract, 
  getContractById, 
  updateContractById, 
  createContract,
  deleteContractById,
  getDetrans,
  getDetransById,
  getCreditors,
  getCreditorsById,
  getAlienTypes,
  getAlienTypesById,
  getIndexes,
  getIndexesById,
  getYears,
  getSpecies,
  getSpeciesById,
  getBrands,
  getModelsById,
  getModelYearsByIds
}