const email = require('./mailing')
const emailConfig = require('./config-email.json')

email.sendEmail(emailConfig.host, emailConfig.port, emailConfig.secure, emailConfig.userName, emailConfig.emailFrom, emailConfig.password, "allan.finco@rainti.com.br","email no reply","testando").catch(console.error);
