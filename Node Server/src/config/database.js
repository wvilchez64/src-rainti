const pgSql = require('pg');

const sqlInit = setup.sqlInit;

var conString = "postgres://";
var conString = conString.concat(
    sqlInit.sqlUser,
    ":",
    sqlInit.sqlPassword,
    "@",
    sqlInit.sqlServer,
    ":",
    sqlInit.sqlPort,
    "/",
    sqlInit.sqlDatabase
);

var config = conString;

const client = new pgSql.Client(
    config
);

client.connect(err => {
    if (err) {
        console.log(err);
    } else {
        // query to the database and get the records
        client.query("select concat('Connected: ', to_char(current_timestamp, 'Month, DD YYYY HH12:MI:SS')) CurrentTime", function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.dir(result.rows[0].currenttime)
                }          
            }      
        )
    }
});

module.exports = client;