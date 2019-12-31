import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { ContractsComponent } from './pages/account/contracts/contracts.component';
import { FramePageComponent } from './pages/master/frame.page';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DetranComponent } from './pages/detran-list/detran-list.component';
import { DetranRegisterComponent } from './pages/detran-register/detran-register.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    ContractsComponent,
    FramePageComponent,
    HomepageComponent,
    DetranComponent,
    DetranRegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
