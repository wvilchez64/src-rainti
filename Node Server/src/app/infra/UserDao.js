class UserDao {

    constructor(client) {
        this._client = client;
    }

    userLogin(email) {
        const cmd = "select * from users where email = '" + email + "'";
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
module.exports = UserDao;