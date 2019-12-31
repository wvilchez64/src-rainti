import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Users } from './signup.model';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent{
  

  public UserRegistration: any [] = [];
  public form: FormGroup;

  constructor(private fb: FormBuilder)
  {
      this.form = this.fb.group
      ({
          UserName: 
          ['', Validators.compose
            (
              [
                Validators.minLength(1),
                Validators.maxLength(60),
                Validators.required,
          ] ) ],

          UserCPF: 
          ['', Validators.compose
            (
              [
                Validators.minLength(1),
                Validators.maxLength(20),
                Validators.required,
          ] ) ],

          UserMail: 
          ['', Validators.compose
            (
              [
                Validators.minLength(1),
                Validators.maxLength(60),
                Validators.required,
          ] ) ],

          UserPassword: 
          ['', Validators.compose
            (
              [
                Validators.minLength(1),
                Validators.maxLength(11),
                Validators.required,
          ] ) ],

         
      });
          // this.load();
  }

  add(){
    const UserId = this.UserRegistration.length +1;
    const UserName = this.form.controls['UserName'].value;
    const UserCPF = this.form.controls['UserCPF'].value;
    const UserMail= this.form.controls['UserMail'].value;
    const UserPassword = this.form.controls['UserPassword'].value;
    this.UserRegistration.push(new Users(UserId, UserName, UserCPF, UserMail, UserPassword));
    this.save();
    this.clear();
  }

clear(){
this.form.reset();
}

// remove (detran: Users){
//   const index = this.UserRegistration.indexOf(detran);
//   if(index !== -1){
//     this.UserRegistration.splice(index, 1);
//   }
//   this.save();

// }

// markAsActive(detran: Users){
//     detran.DetranStatus = true;
//     this.save();

// }

// markAsNotActive(detran: Users){

//   detran.DetranStatus=false;
//   this.save();
// }

// Salvando no localStorage do browser
save (){
const data= JSON.stringify(this.UserRegistration);
localStorage.setItem('DetranRegistration', data);

}

//carregando do localstorage na aplicação

// load(){
//   const data = localStorage.getItem('UserRegistration');
//   if(data){
//       this.UserRegistration = JSON.parse(data);
//   }else{
//       this.UserRegistration =[]
//   }
// }

// changeMode(mode: string){
//   this.mode = mode;

// }

}
