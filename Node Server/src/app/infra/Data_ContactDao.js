class Data_ContactDao {

    constructor(pool) {
        this._pool = pool;
    }

    data_contactInsert(description, identity, datacodeid){

        return new Promise((resolve, reject) => {
           
            this._pool.connect((err, client, done) => {
                if (err) {
                    return reject(err.stack);
                }

                client.query("BEGIN");
			
			    const contact_relationshipSql = "insert into contact_relationship(identity, creationdate) " +
												 "values ($1, $2) returning id;";
                const contact_relationshipValues = [identity, "now()"];
				
                client.query(contact_relationshipSql, contact_relationshipValues, function(err, res) {
                    if (err) {                      
                        client.query("ROLLBACK");                     
                        done();                      
                        return reject(err.stack);
                    };    
                    const idcontact = res.rows[0].id;
                    const contactSql = "insert into data_contact(description, idcontact, datacodeid, creationdate) " +
                                        "values ($1, $2, $3, $4);";
					const contactValues = [description, idcontact, datacodeid, "now()"];
                    client.query(contactSql, contactValues, function(err, res) {
                        if (err) {
                            client.query("ROLLBACK");
                            done();
                            return reject(err.stack);
                        };    
                        client.query("COMMIT");
                        done();
                        return resolve("data_contact/contact_relationship Inserted"); 
                    });
                });
            });
        });
    };

    data_contactSelectId(id){
        const cmd = "select f.id, f.description, f.idcontact,  " +
                    "f.datacodeid, h.description as data_contact_datacode_description, " +
                    "a.description as entity_description, a.status, " +  
                    "f.datacodeid, h.description as data_contact_datacode_description, " +
                    "a.datacodeid as entity_datacodeid, b.description as entity_datacode_description, " +
                    "a.entitytypeid, c.description as entitytype_description, " +
                    "e.id as idstates, e.description as state_description, " +
                    "a.creationdate " +
                    "from data_contact f " +
                    "inner join contact_relationship g on f.idcontact = g.id " +
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

    data_contactSelectDescp(description){
        const cmd = "select f.id, f.description, f.idcontact,  " +
                    "f.datacodeid, h.description as data_contact_datacode_description, " +
                    "a.description as entity_description, a.status, " +  
                    "a.datacodeid as entity_datacodeid, b.description as entity_datacode_description, " +
                    "a.entitytypeid, c.description as entitytype_description, " +
                    "e.id as idstates, e.description as state_description, " +
                    "a.creationdate " +
                    "from data_contact f " +
                    "inner join contact_relationship g on f.idcontact = g.id " +
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

    data_contactUpdate(id, description){
		const cmd = "update data_contact a set description = '" + description + "' where a.id = " + id + ";";
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve("data_contact Updated");
            });
        });
    }

    data_contactSelectAll(){
        const cmd = "select f.id, f.description, f.idcontact,  " +
                    "f.datacodeid, h.description as data_contact_datacode_description, " +
                    "a.description as entity_description, a.status, " +  
                    "a.datacodeid as entity_datacodeid, b.description as entity_datacode_description, " +
                    "a.entitytypeid, c.description as entitytype_description, " +
                    "e.id as idstates, e.description as state_description, " +
                    "a.creationdate " +
                    "from data_contact f " +
                    "inner join contact_relationship g on f.idcontact = g.id " +
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
module.exports = Data_ContactDao;