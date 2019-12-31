class Data_CodeDao {

    constructor(client) {
        this._client = client;
    }

    data_codeInsert(description){
        const cmd = "insert into data_code(description, creationdate) values('" + description + "', CURRENT_TIMESTAMP);";
        return new Promise((resolve, reject) => {
            this._client
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve("data_code Inserted");
            });
        });
    }

    data_codeSelectId(id){
        const cmd = "select * from data_code where id = " + id + ";";
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

    data_codeUpdate(id, description){
        const cmd = "update data_code a set description = '" + description + "', creationdate = CURRENT_TIMESTAMP where a.id = " + id + ";";
        return new Promise((resolve, reject) => {
            this._client
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve("data_code Updated");
            });
        });
    }

    data_codeSelectAll(){
        const cmd = "select * from data_code;";
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
module.exports = Data_CodeDao;