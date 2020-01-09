class Data_CodeDao {

    constructor(pool) {
        this._pool = pool;
    }

    data_codeInsert(description){
        const cmd = "insert into data_code(description, creationdate) values('" + description + "', now());";
        return new Promise((resolve, reject) => {
            this._pool
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
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result.rows);
            });
        });
    }


    data_codeSelectDescp(description){
        const cmd = "select * from data_code where description = '" + description + "';";
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

    data_codeUpdate(id, description){
        const cmd = "update data_code a set description = '" + description + "' where a.id = " + id + ";";
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve("data_code Updated");
            });
        });
    }

    data_codeSelectAll(){
        const cmd = "select * from data_code order by id;";
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
module.exports = Data_CodeDao;