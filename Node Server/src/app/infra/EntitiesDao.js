class EntitiesDao {

    constructor(client) {
        this._client = client;
    }

    entitiesInsert(description, status, datacodeid, entitytypeid){
        const cmd = "insert into entities(description, status, datacodeid, entitytypeid, creationdate) values('" + 
                  description + "', " + status + ", " + datacodeid + ", " + entitytypeid + ", now());";
        return new Promise((resolve, reject) => {
            this._client
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve("entities Inserted");
            });
        });
    }

    entitiesSelectId(id){
        const cmd = "select * from entities where id = " + id + ";";
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

    entitiesSelectDescription(description){
        const cmd = "select * from entities where description = '" + description + "';";
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

    entitiesUpdate(id, description, status, datacodeid, entitytypeid){
		const cmd = "update entities a set description = '" + description + "', status = " + status + ", " +
					"datacodeid = " + datacodeid + ", entitytypeid = " + entitytypeid + " where a.id = " + id + ";";
        return new Promise((resolve, reject) => {
            this._client
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve("entities Updated");
            });
        });
    }

    entitiesSelectAll(){
        const cmd = "select * from entities order by id;";
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
module.exports = EntitiesDao;