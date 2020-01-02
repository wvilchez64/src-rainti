 const pwin =  process.argv[2];
 const crypto = require('crypto');
 const pwout = crypto.createHash('md5').update(pwin).digest("hex")
 console.log(pwout)