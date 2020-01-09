class Data_CreditorDao {

    constructor(client) {
        this._client = client;
    }

    data_creditorInsert(description){
        const cmd = "insert into data_creditor(description, creationdate) values('" + description + "', now());";
        return new Promise((resolve, reject) => {
            this._client
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve("data_creditor Inserted");
            });
        });
    }

    data_creditorSelectId(id){
        const cmd = "select a.id, a.description, " +
                    "a.identity, b.description as entity_description, " +
                    "a.datacodeid, c.description as datacode_description, " +
                    "a.creationdate " +
                    "from data_creditor a " +
                    "inner join entities b on a.identity = b.id " +
                    "inner join data_code c on a.datacodeid = c.id " +
                    "where a.id = " + id + ";";
        return new Promise((resolve, reject) => {
            this._client
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result.rows);
            });
        });
    }


    data_creditorSelectDescp(description){
        const cmd = "select a.id, a.description, " +
                    "a.identity, b.description as entity_description, " +
                    "a.datacodeid, c.description as datacode_description, " +
                    "a.creationdate " +
                    "from data_creditor a " +
                    "inner join entities b on a.identity = b.id " +
                    "inner join data_code c on a.datacodeid = c.id " +
                    "where a.description = '" + description + "';";
        return new Promise((resolve, reject) => {
            this._client
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result.rows);
            });
        });
    }

    data_creditorUpdate(id, description){
        const cmd = "update data_creditor a set description = '" + description + "' where a.id = " + id + ";";
        return new Promise((resolve, reject) => {
            this._client
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve("data_creditor Updated");
            });
        });
    }

    data_creditorSelectAll(){
        const cmd = "select a.id, a.description, " +
                    "a.identity, b.description as entity_description, " +
                    "a.datacodeid, c.description as datacode_description, " +
                    "a.creationdate " +
                    "from data_creditor a " +
                    "inner join entities b on a.identity = b.id " +
                    "inner join data_code c on a.datacodeid = c.id " +
                    "order by a.id;";
        return new Promise((resolve, reject) => {
            this._client
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result.rows);
            });
        });
    }
}    
module.exports = Data_CreditorDao;