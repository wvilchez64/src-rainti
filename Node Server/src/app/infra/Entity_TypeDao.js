class Entity_TypeDao {

    constructor(pool) {
        this._pool = pool;
    }

    entity_typeInsert(description){
        const cmd = "insert into entity_type(description, creationdate) values('" + description + "', now());";
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve("entity_type Inserted");
            });
        });
    }

    entity_typeSelectId(id){
        const cmd = "select * from entity_type where id = " + id + ";";
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

    entity_typeSelectDescp(description){
        const cmd = "select * from entity_type where description = '" + description + "';";
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

    entity_typeUpdate(id, description){
        const cmd = "update entity_type a set description = '" + description + "' where a.id = " + id + ";";
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve("entity_type Updated");
            });
        });
    }

    entity_typeSelectAll(){
        const cmd = "select * from entity_type order by id;";
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
module.exports = Entity_TypeDao;