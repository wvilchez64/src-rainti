class StatesDao {

    constructor(pool) {
        this._pool = pool;
    }

    statesSelectId(id){
        const cmd = "select * from states where id = " + id + ";";
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

    statesSelectDescp(description){
        const cmd = "select * from states where description = '" + description + "';";
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

    statesSelectAll(){
        const cmd = "select * from states order by id;";
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
module.exports = StatesDao;  
