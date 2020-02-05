const Pool = require('pg').Pool
const jsonData = require('../config/config-database.json');
const pool = new Pool({  user: jsonData.user,host: jsonData.host,database: jsonData.database,password: jsonData.password,port: jsonData.port,})



exports.incluir = function (pool,jsonParameters){
    
    console.log('passo2')
    //jsonParameters.
    var parameters = [];
    parameters.push(jsonParameters.contractId);
    parameters.push(jsonParameters.apiName);
    parameters.push(jsonParameters.inputInfo);
    parameters.push(jsonParameters.outputInfo);
    parameters.push(jsonParameters.assinatura);
    parameters.push(jsonParameters.userid);
    

    var sQuery = 'INSERT INTO public.integration_log(id, contractid, apiname, inputinfo, outputinfo, assinatura, userid, creationdate)VALUES ($1, $2, $3, $4, $5, $6, $7, now())  returning id';

    pool.query( sQuery, parameters).then(function(error, queryResult){
        var identity = queryResult.rows[0].id;
        return identity;
    }).catch(function(err){
        return err;
    });
    
    /* pool.query( sSql, parameters,function(error, queryResult){ var identity = queryResult.rows[0].id; });*/
    
    //res.status(200).json({idTransacao: identity})    
}

  

//exports.obter = function (idTransacao,returnValue){
exports.obter = function (idTransacao,returnValue){

    try {
         var parameters = [];
        parameters.push(idTransacao);

        console.log('parameters:' + parameters)
        var sQuery = 'select id, contractid, apiname, inputinfo, outputinfo, assinatura, userid, creationdate from integration_log where id = $1';
        
        pool.query(sQuery, parameters, (err, res) => {
            if (err) {
                returnValue = err;//console.log('err:' + err);
            } else {
                returnValue = JSON.parse(res.rows.toString());
            }
        });
    } catch (error) {
        console.log(error)
    }
    
    return 's';

    /*
    (async function() {
        // note: we don't try/catch this because if connecting throws an exception
        // we don't need to dispose of the client (it will be undefined)
        const client = await pool.connect()
        try {
            await client.query('BEGIN')

            //---------------------------------------------------
          
            var parameters = [];
            parameters.push(idTransacao);
            var sQuery = 'select id, contractid, apiname, input, output, assinatura, userid, creationdate from integration_log where id = $1';
            
            await client.query(sQuery, parameters, function (err, res) {
                if (err) {
                    //console.log('err:' + err);
                    returnValue = err;
                } else {
                    returnValue = res.rows;
                }
            });

            //---------------------------------------------------

            await client.query('COMMIT')
        } catch (e) {await client.query('ROLLBACK');throw e;} 
        finally {client.release()}

      })().catch(e => console.error(e.stack))
      */


}

