var signer =  require('../controller/signer.js');
var util = require('../util.js');
var inputJson = "";
inputJson = {
    "oTransacao": {
        "nNumSeqTransacao"				    : util.lPad(util.nvl("000072"      			    ,""),6   ,"0"), 
        "nCodTransacao"					      : util.lPad(util.nvl("700"         			    ,""),3   ,"0"),
        "nCodModalidadeProcessamento"	: util.lPad(util.nvl("4"           			    ,""),1   ,"0"),
        "nCodIdentCliente"				    : util.lPad(util.nvl("00000009999"  		    ,""),11  ,"0"),
        "sUFOrigemTransacao"			    : util.rPad(util.nvl("FE"         			    ,""),2   ," "),
        "sUFOrigemTransmissao"			  : util.rPad(util.nvl("FE"         			    ,""),2   ," "),
        "sUFDestinoTransmissao"			  : util.rPad(util.nvl("P1E"         			    ,""),2   ," "),
        "nTipoCondTransacao"			    : util.lPad(util.nvl("1"          			    ,""),1   ,"0"),
        "nTamanhoTransacao"				    : util.lPad(util.nvl("0400"       			    ,""),4   ,"0"),
        "nCodRetornoTransacao"			  : util.lPad(util.nvl("00"         			    ,""),2   ,"0"),
        "nDiaJuliano"					        : util.lPad(util.nvl(util.getJulianDate()  	,""),3   ,"0")
    }};

var teste = signer.assinarDocumento(inputJson.toString());

console.log(teste);

console.log(signer.verificaDoc(inputJson.toString(),teste));

