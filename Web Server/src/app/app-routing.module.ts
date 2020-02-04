import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './system-access/login/login.component';
import { AuthGuard } from './auth.guard';
import { DetranMainComponent } from './entities/detran/detran-main/detran-main.component';
import { RegistrarComponent } from './entities/registrar/registrar.component'; 
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
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
import { DetranContactDetailComponent } from './entities/detran/detran-contact-detail/detran-contact-detail.component';
import { UserAddComponent } from './registers/user/user-add/user-add.component';
import { UserMainComponent } from './registers/user/user-main/user-main.component';
import { GroupAddComponent } from './registers/groups/group-add/group-add.component';
import { GroupMainComponent } from './registers/groups/group-main/group-main.component';
import { ContractMainComponent } from './contract/contract-main/contract-main.component';
import { ContractAddComponent } from './contract/contract-add/contract-add.component';
import { TransactionBillingComponent } from './reports/transaction-billing/transaction-billing.component';
import { FinancialTransactionComponent } from './reports/financial-transaction/financial-transaction.component';
import { GroupsDetailComponent } from './registers/groups/groups-detail/groups-detail.component';
import { UserDetailComponent } from './registers/user/user-detail/user-detail/user-detail.component';

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
    path: 'usuarios-adicionar',
    component: UserAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuarios-detalhe/:id',
    component: UserDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuarios',
    component: UserMainComponent,
    canActivate: [AuthGuard]
  },

  {
  path: 'grupos',
  component: GroupMainComponent,
  canActivate: [AuthGuard]
  },

  {
    path: 'grupos-adicionar',
    component: GroupAddComponent,
    canActivate: [AuthGuard]
    },

  {
    path: 'grupo-detalhe/:id',
    component: GroupsDetailComponent,
    canActivate: [AuthGuard]
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
    path: 'credora',
    component: CreditorMainComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'credor-adicionar',
    component: CreditorAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'credor-detalhe/:id',
    component: CreditorDetailComponent,
    canActivate : [AuthGuard],
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
    path: 'detran-adicionar-contato/:id',
    component: DetranContactAddComponent,
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
    path: 'contratos',
    component: ContractMainComponent,
    canActivate: [AuthGuard]
  },
  
  {
    path: 'registrar-contrato',
    component: ContractAddComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'bilhetagem-transacoes',
    component: TransactionBillingComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'transacoes-financeiras',
    component: FinancialTransactionComponent,
    canActivate: [AuthGuard]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }