const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function emailSender(user, callback){//(configHost, configPort, configSecure, userName, emailFrom, password, emailTo, subjectContent, body)  {
  
  console.log(user.host+', ' +user.port+', '+ user.secure+', '+ user.userName+', '+ user.emailFrom+', '+ user.password+', '+ user.emailTo+', '+ user.subjectContent+', '+ user.bodyContent)
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: user.host,
    port: user.port,
    secure: user.secure, // true for 465, false for other ports
    requireTLS: user.requireTLS,
    auth: {
      user: user.emailFrom,
      pass: user.password//  password
    }
  });
  console.log(user.requireTLS)
  
  let mailOptions = {
    from: '"'+user.userName+'" <'+user.emailFrom+'>',//'"'+userName+'" <'+email+'>', // sender address
    to: user.emailTo, // list of receivers
    subject: user.subjectContent, // Subject line
    text: user.plainText, // plain text body
    html: user.html // html body
  };

  let info = await transporter.sendMail(mailOptions);

  callback(info)
  
}

sendEmail = (req, res) =>{

  let userData = req.body  

    emailSender(userData, info => {
      console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
      res.send(info);
    }).catch(error => console.log(error)); 

}

module.exports = {sendEmail} 