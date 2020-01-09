import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserIdleModule } from 'angular-user-idle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { FilterPipe } from './filter.pipe';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { CreditorComponent } from './creditor/creditor.component';
import { CreditorGroupComponent } from './creditor-group/creditor-group.component';
import { ContractRegisterComponent } from './contract-register/contract-register.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { DetranContactsComponent } from './detran/detran-contacts/detran-contacts.component';
import { PasswordRecoverComponent } from './password-recover/password-recover.component';
import { DetranDetailComponent } from './detran/detran-detail/detran-detail.component';
import { PasswordRecoverSuccessComponent } from './password-recover-success/password-recover-success.component';
import { PasswordRecoverFailedComponent } from './password-recover-failed/password-recover-failed.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ConfirmEqualValidator } from '../custom/confirm-equal-validator';
import { DetranAddComponent } from './detran/detran-add/detran-add.component';
import { DetranContactAddComponent } from './detran/detran-contact-add/detran-contact-add.component';
import { DetranMainComponent } from './detran/detran-main/detran-main.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FilterPipe,
    HelpComponent,
    HomeComponent,
    CreditorComponent,
    CreditorGroupComponent,
    ContractRegisterComponent,
    RegistrarComponent,
    DetranContactsComponent,
    PasswordRecoverComponent,
    DetranDetailComponent,
    PasswordRecoverSuccessComponent,
    PasswordRecoverFailedComponent,
    PasswordResetComponent,
    ConfirmEqualValidator,
    DetranAddComponent,
    DetranContactAddComponent,
    DetranMainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    UserIdleModule, 
  ],
  providers: [AuthService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
