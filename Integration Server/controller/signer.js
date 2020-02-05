const crypto = require('crypto');
const fs = require ('fs');
const path = require('path')

function obterChavePublica () {
    try {
        var public_key = fs.readFileSync(path.resolve(__dirname ,'../config/rainti.pub'), 'utf-8');                
        return public_key;
    } catch (error) {
        console.log(error); 
        throw new Error('Chave publica não encontrada');
    }
};

function obterChavePrivada  () {
    try {        
        var private_key = fs.readFileSync(path.resolve(__dirname ,'../config/rainti.key'), 'utf-8');                
        return private_key;
    } catch (error) {
        console.log(error);
        throw new Error('Chave privada não encontrada');
    }
}

function assinarDocumento (doc) {
     try {
        var private_key = obterChavePrivada();
     } catch (error) {
         console.log(error);
         throw new Error('Chave privada não encontrada');
     }

    // Signing
    var signer = crypto.createSign('RSA-SHA256');
    signer.write(doc);
    signer.end();
    
    // Returns the signature in output_format which can be 'binary', 'hex' or 'base64'
    var signature = signer.sign(private_key, 'base64')
    return signature;
}

// +----------------------------------------------------------------------------------+
// | Através da chave pública da RainTi, descriptografa assinatura e compara com hash |
// | do documento. Retorna se verificação foi bem sucedida (true, documento realmente | 
// | assinado pela RainTi), ou não (false, hash e assinatura não batem)               |                                   
// +----------------------------------------------------------------------------------+
function verificaDoc(doc,assinatura){
    let crypto = require('crypto');
    const path = require("path");
    const fs = require('fs');
    const chavePublica = require(path.resolve(__dirname, "./keys/keys.js"));
    let verifier = crypto.createVerify('RSA-SHA256');
    verifier.write(doc);
    verifier.end();

    //Verificar assinatura
    return verifier.verify(chavePublica.obterChavePublica(), assinatura, 'base64');
}

exports.verificaDoc = verificaDoc;
module.exports.assinarDocumento = assinarDocumento;

