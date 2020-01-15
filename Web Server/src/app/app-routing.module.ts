import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './system-access/login/login.component';
import { RegisterComponent } from './system-access/register/register.component';
import { AuthGuard } from './auth.guard';
import { DetranMainComponent } from './entities/detran/detran-main/detran-main.component';
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
import { CreditorMainComponent } from './entities/creditor/creditor-main/creditor-main.component';
import { CreditorDetailComponent } from './entities/creditor/creditor-detail/creditor-detail.component';
import { CreditorAddComponent } from './entities/creditor/creditor-add/creditor-add.component';
import { CreditorContactsComponent } from './entities/creditor/creditor-contacts/creditor-contacts.component';
import { CreditorContactDetailComponent } from './entities/creditor/creditor-contact-detail/creditor-contact-detail.component';
import { CreditorContactAddComponent } from './entities/creditor/creditor-contact-add/creditor-contact-add.component';
import { CreditorGroupMainComponent } from './entities/creditor-group/creditor-group-main/creditor-group-main.component';
import { CreditorGroupDetailComponent } from './entities/creditor-group/creditor-group-detail/creditor-group-detail.component';
import { CreditorGroupAddComponent } from './entities/creditor-group/creditor-group-add/creditor-group-add.component';
import { CreditorGroupContactsComponent } from './entities/creditor-group/creditor-group-contacts/creditor-group-contacts.component';
import { CreditorGroupContactDetailComponent } from './entities/creditor-group/creditor-group-contact-detail/creditor-group-contact-detail.component';
import { CreditorGroupContactAddComponent } from './entities/creditor-group/creditor-group-contact-add/creditor-group-contact-add.component';

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
    path: 'detran-adicionar',
    component: DetranAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detran-adicionar-contato',
    component: DetranContactAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'credora',
    component: CreditorMainComponent,
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
    path: 'credor-detalhe-contato/:id',
    component: CreditorContactDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'credor-adicionar',
    component: CreditorAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'credor-adicionar-contato/:id',
    component: CreditorContactAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'gestora',
    component: CreditorGroupMainComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'gestor-detalhe/:id',
    component: CreditorGroupDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'gestor-contatos/:id',
    component: CreditorGroupContactsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'gestor-detalhe-contato/:id',
    component: CreditorGroupContactDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'gestor-adicionar',
    component: CreditorGroupAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'gestor-adicionar-contato/:id',
    component: CreditorGroupContactAddComponent,
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