import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './system-access/login/login.component';
import { RegisterComponent } from './system-access/register/register.component';
import { AuthGuard } from './auth.guard';
import { DetranMainComponent } from './entities/detran/detran-main/detran-main.component';
import { CreditorGroupComponent } from './entities/creditor-group/creditor-group.component';
import { CreditorComponent } from './entities/creditor/creditor.component';
import { RegistrarComponent } from './entities/registrar/registrar.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { ContractRegisterComponent } from './contract-register/contract-register.component';
import { PasswordRecoverComponent } from './system-access/password-recover/password-recover.component';
import { DetranDetailComponent } from './entities/detran/detran-detail/detran-detail.component';
import { DetranContactsComponent } from './entities/detran/detran-contacts/detran-contacts.component';
import { PasswordRecoverSuccessComponent } from './system-access/password-recover-success/password-recover-success.component';
import { PasswordRecoverFailedComponent } from './system-access/password-recover-failed/password-recover-failed.component';
import { PasswordResetComponent } from './system-access/password-reset/password-reset.component';
import { DetranAddComponent } from './entities/detran/detran-add/detran-add.component';
import { DetranContactAddComponent } from './entities/detran/detran-contact-add/detran-contact-add.component';
import { CreditorDetailComponent } from './entities/creditor/creditor-detail/creditor-detail.component';
import { CreditorContactsComponent } from './entities/creditor/creditor-contacts/creditor-contacts.component';
import { DetranContactDetailComponent } from './entities/detran/detran-contact-detail/detran-contact-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'recuperar-senha',
    component: PasswordRecoverComponent,
  },
  {
    path: 'recuperar-senha-enviado',
    component: PasswordRecoverSuccessComponent,
  },
  {
    path: 'recuperar-senha-falha',
    component: PasswordRecoverFailedComponent
  },
  {
    path: 'recuperar-senha-reset',
    component: PasswordResetComponent
  },
  {
    path: 'detran',
    component: DetranMainComponent,
    canActivate: [AuthGuard],
  },
  {        
    path: 'detran-detalhe/:id',
    component: DetranDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detran-contatos/:id',
    component: DetranContactsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detran-detalhe-contato/:id',
    component: DetranContactDetailComponent,
    canActivate: [AuthGuard]
  },
  
  {
    path: 'detran-adicionar',
    component: DetranAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detran-adicionar-contato/:id',
    component: DetranContactAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'credora',
    component: CreditorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'credor-detalhe/:id',
    component: CreditorDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'credor-contatos/:id',
    component: CreditorContactsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'gestora',
    component: CreditorGroupComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'registradora',
    component: RegistrarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'principal',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ajuda',
    component: HelpComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'registrar-contrato',
    component: ContractRegisterComponent,
    canActivate: [AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
