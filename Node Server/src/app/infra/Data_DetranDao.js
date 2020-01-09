class Data_DetranDao {

    constructor(pool) {
        this._pool = pool;
    }

    data_detranInsert(description, identity, datacodeid){
        const cmd = "insert into data_detran(description, identity, datacodeid, creationdate) values('" + 
        description + "', " + identity + ", " + datacodeid + ", now());";
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error.stack);
                }
                return resolve("data_detran Inserted");
            });
        });
    }

    data_detranSelectId(id){
        const cmd = "select a.id, a.description, " +
                    "a.identity, b.description as entity_description, " +
                    "a.datacodeid, c.description as datacode_description, " +
                    "a.creationdate " +
                    "from data_detran a " +
                    "inner join entities b on a.identity = b.id " +
                    "inner join data_code c on a.datacodeid = c.id " +
                    "where a.id = " + id + ";";
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error.stack);
                }
                return resolve(result.rows);
            });
        });
    }

    data_detranSelectDescp(description){
        const cmd = "select a.id, a.description, " +
                    "a.identity, b.description as entity_description, " +
                    "a.datacodeid, c.description as datacode_description, " +
                    "a.creationdate " +
                    "from data_detran a " +
                    "inner join entities b on a.identity = b.id " +
                    "inner join data_code c on a.datacodeid = c.id " +
                    "where a.description = '" + description + "';";
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error.stack);
                }
                return resolve(result.rows);
            });
        });
    }

    data_detranUpdate(id, description, identity, datacodeid){
        const cmd = "update data_detran a set description = '" + description + "', identity = " + identity + ", " +
        "datacodeid = " + datacodeid + " where a.id = " + id + ";";
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error.stack);
                }
                return resolve("data_detran Updated");
            });
        });
    }

    data_detranSelectAll(){
        const cmd = "select a.id, a.description, " +
                    "a.identity, b.description as entity_description, " +
                    "a.datacodeid, c.description as datacode_description, " +
                    "a.creationdate " +
                    "from data_detran a " +
                    "inner join entities b on a.identity = b.id " +
                    "inner join data_code c on a.datacodeid = c.id " +
                    "order by a.id;";
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error.stack);
                }
                return resolve(result.rows);
            });
        });
    }
}    
module.exports = Data_DetranDao;