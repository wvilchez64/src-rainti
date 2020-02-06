import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAddService } from '../user-services/user-add.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

    _registerUserData = {
    firstName: '',
    lastName: '', 
    userName: '',
    dddModel: '',
    phone: '',
    cpf: '',
    status: true,
    email: '',
    groupsId: '',
    registration: '',

  }

  _userId = ''

  _resetCode = ''

  _errorMessage = ''
  _groupsData : Array<any> = []
  topicHasError = true
  dddHasError = true

  _activeTab = 'user-data'

  constructor(private _userAddService: UserAddService,
    private _router: Router,
    private _location: Location) { }

    ngOnInit() {
      this._userAddService.getUserGroups()
      .subscribe(
        res => {
          console.log(res)
          this._groupsData = res
        },
        error => {  console.log(error)
                  this._errorMessage = error.error }
        )
    }


  nextTab(tab){
    this._activeTab = tab
  }
  
  featuresControl(event) {
    this._registerUserData.groupsId = event.target.id
  }
   
  createUser(){
     this._userAddService.createUser(this._registerUserData)
       .subscribe(
         res => {

           this._resetCode = res.resetCode
           this._userId = res.userId
           this.sendEmail(this._registerUserData.email)
           console.log(res)
           
         },
         error => console.log(error) 
         )  
     
   } 

  backToUsers(){
    this._location.back()
  }
  
  sendEmail(emailTo) {
    var emailConfig = require('../../../../assets/configs/config-email-noreply.json')

    let emailData = {
      host: emailConfig.host,
      port: emailConfig.port,
      secure: emailConfig.secure,
      requireTLS: emailConfig.requireTLS,
      userName: emailConfig.userName,
      emailFrom: emailConfig.emailFrom,
      password: emailConfig.password,
      emailTo: emailTo,
      subjectContent: "[NÃO RESPONDA] - RainTI novo Acesso",
      plainText: "Acesso o link a seguir: http://"+emailConfig.hostSrc+":4200/novo-acesso, informe o seu nome de usuário: "+this._registerUserData.userName+" e o código a seguir: " + this._resetCode+" para criar seu acesso",
      html: 
      ' <head> '
      +' <title>Rating Reminder</title> '
    +' <meta content="text/html; charset=utf-8" http-equiv="Content-Type"> '
    +' <meta content="width=device-width" name="viewport"> '
    +' <style type="text/css"> '
    +' @font-face { '
          +' font-family: &#x27; '
            +' Postmates Std&#x27; '
            +' ; '
            +' font-weight: 600; '
            +' font-style: normal; '
            +' src: local(&#x27; Postmates Std Bold&#x27; ), url(https://s3-us-west-1.amazonaws.com/buyer-static.postmates.com/assets/email/postmates-std-bold.woff) format(&#x27; woff&#x27; ); '
            +' } '

        +' @font-face { '
          +' font-family: &#x27; '
            +' Postmates Std&#x27; '
            +' ; '
            +' font-weight: 500; '
            +' font-style: normal; '
            +' src: local(&#x27; Postmates Std Medium&#x27; ), url(https://s3-us-west-1.amazonaws.com/buyer-static.postmates.com/assets/email/postmates-std-medium.woff) format(&#x27; woff&#x27; ); '
            +' } '

        +' @font-face { '
          +' font-family: &#x27; '
            +' Postmates Std&#x27; '
            +'  ; '
            +' font-weight: 400; '
            +' font-style: normal; '
            +' src: local(&#x27; Postmates Std Regular&#x27; ), url(https://s3-us-west-1.amazonaws.com/buyer-static.postmates.com/assets/email/postmates-std-regular.woff) format(&#x27; woff&#x27; ); '
            +' } '
        +' </style> '
    +' <style media="screen and (max-width: 680px)"> '
    +' @media screen and (max-width: 680px) { '
          +' .page-center { '
              +' padding-left: 0 !important; '
                +' padding-right: 0 !important; '
                +'  } '

            +' .footer-center { '
              +' padding-left: 20px !important; '
                +' padding-right: 20px !important; '
                +'  } '
            +' } '
        +' </style> '
    +' </head> '

+' <body style="background-color: #f4f4f5;"> '
+' <table cellpadding="0" cellspacing="0" '
    +' style="width: 100%; height: 100%; background-color: #f4f4f5; text-align: center;"> '
        +' <tbody> '
        +' <tr> '
            +' <td style="text-align: center;"> '
                +' <table align="center" cellpadding="0" cellspacing="0" id="body" '
                    +' style="background-color: #fff; width: 100%; max-width: 680px; height: 100%;"> '
                        +' <tbody> '
                        +' <tr> '
                            +' <td> '
                                +' <table align="center" cellpadding="0" cellspacing="0" class="page-center" '
                                    +' style="text-align: left; padding-bottom: 88px; width: 100%; padding-left: 120px; padding-right: 120px;"> '
                                        +' <tbody> '
                                        +' <tr> '
                                            +' <td style="padding-top: 24px;"> '
                                                +' <img src="cid:logo" '
                                                    +' style="width: 56px;"> '
                                                        +' </td> '
                                                +' </tr> '
                                            +' <tr> '
                                            +' <td colspan="2" '
                                                +' style="padding-top: 72px; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; color: #000000; font-family: \'Postmates Std\', \'Helvetica\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif; font-size: 48px; font-smoothing: always; font-style: normal; font-weight: 600; letter-spacing: -2.6px; line-height: 52px; mso-line-height-rule: exactly; text-decoration: none;"> '
                                                    +' Bem-vindo à RainTI, '+this._registerUserData.firstName+' '+this._registerUserData.lastName+'</td> '
                                                    +' </tr> '
                                            +'  <tr> '
                                            +' <td style="padding-top: 48px; padding-bottom: 48px;"> '
                                                +' <table cellpadding="0" cellspacing="0" style="width: 100%"> '
                                                    +' <tbody> '
                                                        +' <tr> '
                                                            +' <td '
                                                                +' style="width: 100%; height: 1px; max-height: 1px; background-color: #d9dbe0; opacity: 0.81"> '
                                                                    +'  </td> '
                                                                +' </tr> '
                                                            +'  </tbody> '
                                                        +' </table> '
                                                    +' </td> '
                                                +' </tr> '
                                            +' <tr> '
                                            +' <td '
                                                +' style="-ms-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; color: #9095a2; font-family: \'Postmates Std\', \'Helvetica\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif; font-size: 16px; font-smoothing: always; font-style: normal; font-weight: 400; letter-spacing: -0.18px; line-height: 24px; mso-line-height-rule: exactly; text-decoration: none; vertical-align: top; width: 100%;"> '
                                                    +' Você está recebendo esse e-mail pois foi criada uma conta no SRC-e '
                                                    +' Sistema de Registro de Contrato eletrônico pela empresa RainTI. '
                                                    +' A seguir estão seus dados de acesso'
                                                    +' Usuário: '+this._registerUserData.userName 
                                                    +' Código de verificação: '+this._resetCode
                                                    +' Com esses dados você poderá cadastrar sua senha e acessar ao sistema.'
                                                    +' </td> '
                                                +' </tr> '
                                            +' <tr> '
                                            +' <td '
                                                +' style="padding-top: 24px; -ms-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; color: #9095a2; font-family: \'Postmates Std\', \'Helvetica\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif; font-size: 16px; font-smoothing: always; font-style: normal; font-weight: 400; letter-spacing: -0.18px; line-height: 24px; mso-line-height-rule: exactly; text-decoration: none; vertical-align: top; width: 100%;"> '
                                                    +' Clique no botão a seguir e cadastre uma nova senha '
                                                    +' </td> '
                                                +' </tr> '
                                            +' <tr> '
                                            +' <td> '
                                                +' <a data-click-track-id="37" href="http://'+emailConfig.hostSrc+':4200/novo-acesso/'+this._userId+'" '
                                                    +' style="margin-top: 36px; -ms-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; color: #ffffff; font-family: \'Postmates Std\', \'Helvetica\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif; font-size: 12px; font-smoothing: always; font-style: normal; font-weight: 600; letter-spacing: 0.7px; line-height: 48px; mso-line-height-rule: exactly; text-decoration: none; vertical-align: top; width: 220px; background-color: #0090D5; border-radius: 5px; display: block; text-align: center; text-transform: uppercase" '
                                                        +' target="_blank"> '
                                                        +' Recuperar senha '
                                                        +' </a> '
                                                    +' </td> '
                                                +' </tr> '
                                            +'  </tbody> '
                                        +'  </table> '
                                    +' </td> '
                                +'  </tr> '
                            +' </tbody> '
                        +' </table> '
                    +' </td> '
                +' </tr> '
            +'         </tbody> '
+'     </table> '
+' </body> '
  }

  console.log(emailData)
     this._userAddService.sendEmail(emailData)
  .subscribe(
    res => {
      console.log(res)
    },
    error => console.log(error)
  )   
    
  }

}
