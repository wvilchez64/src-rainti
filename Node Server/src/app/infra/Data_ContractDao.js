class Data_ContractDao {

    constructor(pool) {
        this._pool = pool;
    }

    data_contractInsert(description, identity, datacodeid){

        return new Promise((resolve, reject) => {
           
            this._pool.connect((err, client, done) => {
                if (err) {
                    return reject(err.stack);
                }

                client.query("BEGIN");
			
			    const contract_relationshipSql = "insert into contract_relationship(identity, creationdate) " +
												 "values ($1, $2) returning id;";
                const contract_relationshipValues = [identity, "now()"];
				
                client.query(contract_relationshipSql, contract_relationshipValues, function(err, res) {
                    if (err) {                      
                        client.query("ROLLBACK");                     
                        done();                      
                        return reject(err.stack);
                    };    
                    const idcontract = res.rows[0].id;
                    const contractSql = "insert into data_contract(description, idcontract, datacodeid, creationdate) " +
                                        "values ($1, $2, $3, $4);";
					const contractValues = [description, idcontract, datacodeid, "now()"];
                    client.query(contractSql, contractValues, function(err, res) {
                        if (err) {
                            client.query("ROLLBACK");
                            done();
                            return reject(err.stack);
                        };    
                        client.query("COMMIT");
                        done();
                        return resolve("data_contract/contract_relationship Inserted"); 
                    });
                });
            });
        });
    };

    data_contractSelectId(id){
        const cmd = "select f.id, f.description, f.idcontract,  " +
                    "f.datacodeid, h.description as data_contract_datacode_description, " +
                    "a.description as entity_description, a.status, " +  
                    "f.datacodeid, h.description as data_contract_datacode_description, " +
                    "a.datacodeid as entity_datacodeid, b.description as entity_datacode_description, " +
                    "a.entitytypeid, c.description as entitytype_description, " +
                    "e.id as idstates, e.description as state_description, " +
                    "a.creationdate " +
                    "from data_contract f " +
                    "inner join contract_relationship g on f.idcontract = g.id " +
                    "inner join data_code h on f.datacodeid = h.id " +
                    "inner join entities a on g.identity = a.id " +
                    "inner join data_code b on a.datacodeid = b.id " + 
                    "inner join entity_type c on a.entitytypeid = c.id " +  
                    "inner join states_relationship d on a.id = d.identity " +  
                    "inner join states e on d.idstate = e.id " +  
                    "where f.id = " + id + ";";
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result.rows);
            });
        });
    }

    data_contractSelectDescp(description){
        const cmd = "select f.id, f.description, f.idcontract,  " +
                    "f.datacodeid, h.description as data_contract_datacode_description, " +
                    "a.description as entity_description, a.status, " +  
                    "a.datacodeid as entity_datacodeid, b.description as entity_datacode_description, " +
                    "a.entitytypeid, c.description as entitytype_description, " +
                    "e.id as idstates, e.description as state_description, " +
                    "a.creationdate " +
                    "from data_contract f " +
                    "inner join contract_relationship g on f.idcontract = g.id " +
                    "inner join data_code h on f.datacodeid = h.id " +
                    "inner join entities a on g.identity = a.id " +
                    "inner join data_code b on a.datacodeid = b.id " + 
                    "inner join entity_type c on a.entitytypeid = c.id " +  
                    "inner join states_relationship d on a.id = d.identity " +  
                    "inner join states e on d.idstate = e.id " +  
                    "where f.description = '"+ description + "';";
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result.rows);
            });
        });
    }

    data_contractUpdate(id, description){
		const cmd = "update data_contract a set description = '" + description + "' where a.id = " + id + ";";
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve("data_contract Updated");
            });
        });
    }

    data_contractSelectAll(){
        const cmd = "select f.id, f.description, f.idcontract,  " +
                    "f.datacodeid, h.description as data_contract_datacode_description, " +
                    "a.description as entity_description, a.status, " +  
                    "a.datacodeid as entity_datacodeid, b.description as entity_datacode_description, " +
                    "a.entitytypeid, c.description as entitytype_description, " +
                    "e.id as idstates, e.description as state_description, " +
                    "a.creationdate " +
                    "from data_contract f " +
                    "inner join contract_relationship g on f.idcontract = g.id " +
                    "inner join data_code h on f.datacodeid = h.id " +
                    "inner join entities a on g.identity = a.id " +
                    "inner join data_code b on a.datacodeid = b.id " + 
                    "inner join entity_type c on a.entitytypeid = c.id " +  
                    "inner join states_relationship d on a.id = d.identity " +  
                    "inner join states e on d.idstate = e.id "
                    "order by f.id;";
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result.rows);
            });
        });
    }
}    
module.exports = Data_ContractDao;