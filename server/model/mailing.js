const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function emailSender(configHost, configPort, configSecure, userName, emailFrom, password, emailTo, subjectContent, body) {
  
  console.log(configHost+', ' +configPort+', '+ configSecure+', '+ userName+', '+ emailFrom+', '+ password+', '+ emailTo+', '+ subjectContent+', '+ body)
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: configHost,
    port: configPort,
    secure: configSecure, // true for 465, false for other ports
    auth: {
      user: emailFrom,
      pass: password//  password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"'+userName+'" <'+emailFrom+'>',//'"'+userName+'" <'+email+'>', // sender address
    to: emailTo, // list of receivers
    subject: subjectContent, // Subject line
    text: body, // plain text body
    html: "<b>"+body+"</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
}


const sendEmail = (req, res) =>{
  let userData = req.body

  emailSender(userData.host, 
              userData.port, 
              userData.segure, 
              userData.userName, 
              userData.emailFrom, 
              userData.password, 
              userData.emailTo, 
              userData.subjectContent, 
              userData.bodyContent)

}
//sendEmail().catch(console.error);


module.exports = {sendEmail} 