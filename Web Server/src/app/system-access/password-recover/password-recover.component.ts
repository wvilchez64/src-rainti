import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../system-access-services/auth.service';

@Component({
  selector: 'app-password-recover',
  templateUrl: './password-recover.component.html',
  styleUrls: ['./password-recover.component.css']
})
export class PasswordRecoverComponent implements OnInit {

  recoverPasswordData = {
    email: ''
  }
  resetCode = {}
  

  constructor(private _auth: AuthService,
    private _router: Router) {
     
     }

  ngOnInit() {
 
  }

  recoverPassword(){
    this._auth.recoverPassword(this.recoverPasswordData)
    .subscribe(
      res => {
        this.resetCode = res.code
        this.sendEmail(res.emailTo)          
        console.log(res)
        this._router.navigate(['/recuperar-senha-enviado'])  
      },
      error => {
          console.log(error) ,
          this._router.navigate(['/recuperar-senha-falha'])
      }
      )
  }

  sendEmail(emailTo){
    var emailConfig = require('../../../assets/configs/config-email-noreply.json')

    let emailData = {
      host: emailConfig.host, 
	    port: emailConfig.port,
      secure: emailConfig.secure,
      userName: emailConfig.userName,
      emailFrom: emailConfig.emailFrom,
      password: emailConfig.password,
      emailTo: emailTo,
      subjectContent: "[NÃO RESPONDA] - RainTI recuperar senha",
      bodyContent: "Para recuperar sua senha acesse: http://localhost:4200/recuperar-senha-reset, informe seu usário e o código a seguir: "+this.resetCode
    }

    console.log(emailData)
     this._auth.sendEmail(emailData)
      .subscribe(
        res => {
          console.log(res)
        },
        error => console.log(error) 
        )   
    
  }

}
