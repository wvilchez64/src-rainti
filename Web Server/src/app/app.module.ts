import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserIdleModule } from 'angular-user-idle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './system-access/register/register.component';
import { LoginComponent } from './system-access/login/login.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { FilterPipe } from './filter.pipe';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { CreditorComponent } from './entities/creditor/creditor.component';
import { CreditorGroupComponent } from './entities/creditor-group/creditor-group.component';
import { ContractRegisterComponent } from './contract-register/contract-register.component';
import { RegistrarComponent } from './entities/registrar/registrar.component';
import { DetranContactsComponent } from './entities/detran/detran-contacts/detran-contacts.component';
import { PasswordRecoverComponent } from './system-access/password-recover/password-recover.component';
import { DetranDetailComponent } from './entities/detran/detran-detail/detran-detail.component';
import { PasswordRecoverSuccessComponent } from './system-access/password-recover-success/password-recover-success.component';
import { PasswordRecoverFailedComponent } from './system-access/password-recover-failed/password-recover-failed.component';
import { PasswordResetComponent } from './system-access/password-reset/password-reset.component';
import { ConfirmEqualValidator } from '../custom/confirm-equal-validator';
import { DetranAddComponent } from './entities/detran/detran-add/detran-add.component';
import { DetranContactAddComponent } from './entities/detran/detran-contact-add/detran-contact-add.component';
import { DetranMainComponent } from './entities/detran/detran-main/detran-main.component';
import { CreditorDetailComponent } from './entities/creditor/creditor-detail/creditor-detail.component';
import { CreditorContactsComponent } from './entities/creditor/creditor-contacts/creditor-contacts.component';

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
    CreditorDetailComponent,
    CreditorContactsComponent,
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
