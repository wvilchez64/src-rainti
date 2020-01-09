class EntitiesDao {

    constructor(pool) {
        this._pool = pool;
    }

    entitiesInsert(description, status, datacodeid, entitytypeid, idstate){

        return new Promise((resolve, reject) => {
           
            this._pool.connect((err, client, done) => {
                if (err) {
                    return reject(err.stack);
                }

                client.query("BEGIN");
                const entitySql = "insert into entities(description, status, datacodeid, entitytypeid, creationdate) " +
                                        "values ($1, $2, $3, $4, $5) returning id;";
                const entityValues = [description , status, datacodeid, entitytypeid, "now()"];
                
                client.query(entitySql, entityValues, function(err, res) {
                    if (err) {                      
                        client.query("ROLLBACK");                     
                        done();                      
                        return reject(err.stack);
                    };    
                    const identity = res.rows[0].id;
                    const stateSql = "insert into states_relationship(idstate, identity) " +
                    "values ($1, $2);";
                    const stateValues = [idstate, identity];
                    client.query(stateSql, stateValues, function(err, res) {
                        if (err) {
                            client.query("ROLLBACK");
                            done();
                            return reject(err.stack);
                        };    
                        client.query("COMMIT");
                        done();
                        return resolve("entities/states_relationship Inserted"); 
                    });
                });
            });
        });
    };

    entitiesSelectId(id){
        const cmd = "select a.description, a.status, " +
                    "a.datacodeid, b.description as datacode_description, " +
                    "a.entitytypeid, c.description as entitytype_description, " +
                    "e.id as idstates, e.description as state_description, " +
                    "a.creationdate " +
                    "from entities a " +
                    "inner join data_code b on a.datacodeid = b.id " +
                    "inner join entity_type c on a.entitytypeid = c.id " +
                    "inner join states_relationship d on a.id = d.identity " +
                    "inner join states e on d.idstate = e.id " +
                    "where a.id = " + id + ";";
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

    entitiesSelectDescp(description){
        const cmd = "select a.description, a.status, " +
                    "a.datacodeid, b.description as datacode_description, " +
                    "a.entitytypeid, c.description as entitytype_description, " +
                    "e.id as idstates, e.description as state_description, " +
                    "a.creationdate " +
                    "from entities a " +
                    "inner join data_code b on a.datacodeid = b.id " +
                    "inner join entity_type c on a.entitytypeid = c.id " +
                    "inner join states_relationship d on a.id = d.identity " +
                    "inner join states e on d.idstate = e.id " +
                    "where a.description = "+ description + "';";
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

    entitiesUpdate(id, description, status, datacodeid, entitytypeid){
		const cmd = "update entities a set description = '" + description + "', status = " + status + ", " +
					"datacodeid = " + datacodeid + ", entitytypeid = " + entitytypeid + " where a.id = " + id + ";";
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve("entity Updated");
            });
        });
    }

    entitiesSelectAll(){
        const cmd = "select a.description, a.status, " +
                    "a.datacodeid, b.description as datacode_description, " +
                    "a.entitytypeid, c.description as entitytype_description, " +
                    "e.id as idstates, e.description as state_description, " +
                    "a.creationdate " +
                    "from entities a " +
                    "inner join data_code b on a.datacodeid = b.id " +
                    "inner join entity_type c on a.entitytypeid = c.id " +
                    "inner join states_relationship d on a.id = d.identity " +
                    "inner join states e on d.idstate = e.id " +
                    "order by a.id;";
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
module.exports = EntitiesDao;