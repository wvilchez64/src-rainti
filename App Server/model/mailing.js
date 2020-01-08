const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function emailSender(user, callback){//(configHost, configPort, configSecure, userName, emailFrom, password, emailTo, subjectContent, body)  {
  
  console.log(user.host+', ' +user.port+', '+ user.secure+', '+ user.userName+', '+ user.emailFrom+', '+ user.password+', '+ user.emailTo+', '+ user.subjectContent+', '+ user.bodyContent)
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: user.host,
    port: user.port,
    secure: user.secure, // true for 465, false for other ports
    auth: {
      user: user.emailFrom,
      pass: user.password//  password
    }
  });
  
  let mailOptions = {
    from: '"'+user.userName+'" <'+user.emailFrom+'>',//'"'+userName+'" <'+email+'>', // sender address
    to: user.emailTo, // list of receivers
    subject: user.subjectContent, // Subject line
    text: user.bodyContent, // plain text body
    html: "<b>"+user.bodyContent+"</b>" // html body
  };

  let info = await transporter.sendMail(mailOptions);

  callback(info)
  
}

sendEmail = (req, res) =>{

  let userData = req.body  

    emailSender(userData, info => {
      console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
      res.send(info);
    }); 

}

module.exports = {sendEmail} 