const crypto = require('crypto');
class UsersDao {

    constructor(pool) {
        this._pool = pool;
    }

/**** usersout ****/

    usersoutCheck(email) {
        const cmd = "select exists (select true from usersout where email = '" + email + "') as email;";
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result.rows[0]);
            });
        });
    }
    
    usersoutInsert(email){

        const cmd = "insert into usersout(email, creationdate) " +
                    "values ('" + email + "', now());";
           
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve("userout Inserted");
            });
        });
    };

    usersoutSelectId(id){
        const cmd = "select a.email, creationdate " +
					"from usersout a " +
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

    usersoutSelectEmail(email){
        const cmd = "select a.email, creationdate " +
					"from usersout a " +
                    "where a.email = '" + email + "';";
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

    usersoutSelectAll(){
        const cmd = "select a.email, a.creationdate " +
					"from usersout a " +
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

    usersoutDelete(email){

        const cmd = "delete from usersout " +
                    "where email = '" + email + "';";
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve("usersout Deleted");
            });
        });
    }

/**** users ****/

    usersLogin(email){
        const cmd = "select a.firstname, a.lastname, a.email, a.username, " +
                    "a.passwordmd5, a.creationdate, a.resetcode " +
                    "from users a " +
                    "where a.email = '"+ email + "' " +
                    "and not exists (select b.email from usersout b where b.email = a.email);";
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result.rows[0]);
            });
        });
    }

    usersInsert(firstname, lastname, email, username, passwordmd5, resetcode){
        const pw = crypto.createHash('md5').update(passwordmd5).digest("hex");
        const rc = crypto.createHash('md5').update(resetcode).digest("hex");

        const cmd = "insert into users(firstname, lastname, email, username, passwordmd5, creationdate, resetcode) " +
                    "values ('" + firstname + "', '" + lastname + "', '" + email + "', '" + username + "', '" + 
                    pw + "', now(), '" + rc + "');";
           
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve("user Inserted");
            });
        });
    };

    usersSelectId(id){
        const cmd = "select a.firstname, a.lastname, a.email, a.username, " +
                    "a.passwordmd5, a.creationdate, a.resetcode " +
					"from users a " +
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

    usersSelectFullname(firstname, lastname){
        const cmd = "select a.firstname, a.lastname, a.email, a.username, " +
                    "a.passwordmd5, a.creationdate, a.resetcode " +
					"from users a " +
                    "where a.firstname = '"+ firstname + "' " +
					"and   a.lastname = '"+ lastname + "';";
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
	
	usersSelectUsername(username){
        const cmd = "select a.firstname, a.lastname, a.email, a.username, " +
                    "a.passwordmd5, a.creationdate, a.resetcode " +
					"from users a " +
                    "where a.username = '" + username + "';";
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

	usersSelectEmail(email){
        const cmd = "select a.firstname, a.lastname, a.email, a.username, " +
                    "a.passwordmd5, a.creationdate, a.resetcode " +
					"from users a " +
                    "where a.email = '"+ email + "';";
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

    usersUpdate(id, firstname, lastname, email, username, passwordmd5, resetcode){
        const pw = crypto.createHash('md5').update(passwordmd5).digest("hex");
        const rc = crypto.createHash('md5').update(resetcode).digest("hex");

        const cmd = "update users a set firstname = '" + firstname + "', lastname = '" + lastname + "', " +
                    "email = '" + email + "', username = '" + username + "', " +
		            "passwordmd5 = '" + pw + "', " +
                    "resetcode = '" + rc + "' where a.id = " + id + ";";
        return new Promise((resolve, reject) => {
            this._pool
            .query(cmd, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve("user Updated");
            });
        });
    }

    usersSelectAll(){
        const cmd = "select a.firstname, a.lastname, a.email, a.username, " +
                    "passwordmd5, creationdate, resetcode " +
					"from users a " +
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
module.exports = UsersDao;