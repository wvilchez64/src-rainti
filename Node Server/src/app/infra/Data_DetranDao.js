class Data_DetranDao {

    constructor(client) {
        this._client = client;
    }

    data_detranInsert(description, identity, datacodeid){
        const cmd = "insert into data_detran(description, identity, datacodeid, creationdate) values('" + 
        description + "', " + identity + ", " + datacodeid + ", now());";
        return new Promise((resolve, reject) => {
            this._client
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve("data_detran Inserted");
            });
        });
    }

    data_detranSelectId(id){
        const cmd = "select * from data_detran where id = " + id + ";";
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

    data_detranSelectDescription(description){
        const cmd = "select * from data_detran where description = '" + description + "';";
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

    data_detranUpdate(id, description, identity, datacodeid){
        const cmd = "update data_detran a set description = '" + description + "', identity = " + identity + ", " +
        "datacodeid = " + datacodeid + " where a.id = " + id + ";";
        return new Promise((resolve, reject) => {
            this._client
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve("data_detran Updated");
            });
        });
    }

    data_detranSelectAll(){
        const cmd = "select * from data_detran order by id;";
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
module.exports = Data_DetranDao;