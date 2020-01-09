const { Pool } = require('pg');

const pool = new Pool(
    setup.sql.pool
);

pool.connect(err => {
    if (err) {
        console.log(err);
    } else {
        // query to the database and get the records
        pool.query("select concat('Connected: ', to_char(current_timestamp, 'Month, DD YYYY HH12:MI:SS')) CurrentTime", 
        function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.dir(result.rows[0].currenttime);
                }          
        });
    }
});

module.exports = pool;