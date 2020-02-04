import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserIdleModule } from 'angular-user-idle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './system-access/login/login.component';

import { AuthService } from './system-access/system-access-services/auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { FilterPipe } from './pipes/filter-name.pipe';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
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

import { CreditorMainComponent } from './entities/creditor/creditor-main/creditor-main.component';
import { CreditorDetailComponent } from './entities/creditor/creditor-detail/creditor-detail.component';
import { CreditorAddComponent } from './entities/creditor/creditor-add/creditor-add.component';
import { CreditorContactsComponent } from './entities/creditor/creditor-contacts/creditor-contacts.component';
import { CreditorContactAddComponent } from './entities/creditor/creditor-contact-add/creditor-contact-add.component';
import { CreditorContactDetailComponent } from './entities/creditor/creditor-contact-detail/creditor-contact-detail.component';

import { CreditorGroupMainComponent } from './entities/creditor-group/creditor-group-main/creditor-group-main.component';
import { CreditorGroupDetailComponent } from './entities/creditor-group/creditor-group-detail/creditor-group-detail.component';
import { CreditorGroupAddComponent } from './entities/creditor-group/creditor-group-add/creditor-group-add.component';
import { CreditorGroupContactsComponent } from './entities/creditor-group/creditor-group-contacts/creditor-group-contacts.component';
import { CreditorGroupContactAddComponent } from './entities/creditor-group/creditor-group-contact-add/creditor-group-contact-add.component';
import { CreditorGroupContactDetailComponent } from './entities/creditor-group/creditor-group-contact-detail/creditor-group-contact-detail.component';
import { DetranContactDetailComponent } from './entities/detran/detran-contact-detail/detran-contact-detail.component';
import { GroupAddComponent } from './registers/groups/group-add/group-add.component';
import { GroupMainComponent } from './registers/groups/group-main/group-main.component';
import { UserAddComponent } from './registers/user/user-add/user-add.component';
import { UserMainComponent } from './registers/user/user-main/user-main.component';
import { ContractAddComponent } from './contract/contract-add/contract-add.component';
import { ContractMainComponent } from './contract/contract-main/contract-main.component';
import { CpfCnpjModule } from 'ng2-cpf-cnpj';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FinancialTransactionComponent } from './reports/financial-transaction/financial-transaction.component';
import { TransactionBillingComponent } from './reports/transaction-billing/transaction-billing.component';
import { AuditUserDetailComponent } from './reports/audit-history/audit-user-detail/audit-user-detail.component';
import { AuditGroupDetailComponent } from './reports/audit-history/audit-group-detail/audit-group-detail.component';
import { AuditContractDetailComponent } from './reports/audit-history/audit-contract-detail/audit-contract-detail.component';
import { AuditDetranDetailComponent } from './reports/audit-history/audit-detran-detail/audit-detran-detail.component';
import { AuditCreditorDetailComponent } from './reports/audit-history/audit-creditor-detail/audit-creditor-detail.component';
import { FilterEntityNamePipe } from './pipes/filter-entity-name.pipe';
import { FilterFeatureNamePipe } from './pipes/filter-feature-name.pipe';
import { GroupsDetailComponent } from './registers/groups/groups-detail/groups-detail.component';
import { FilterStatusPipe } from './pipes/filter-status.pipe';
import { FilterDescriptionPipe } from './pipes/filter-description.pipe';
import { TableFilterPipe } from './reports/transaction-billing/table-filter-pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilter, faBan, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ExcelService } from './reports/transaction-billing/excel.service';
import { DownloadFileService } from './reports/transaction-billing/csv.service';
import { UserDetailComponent } from './registers/user/user-detail/user-detail/user-detail.component';
import { FilterUserPipe } from './pipes/filter-user.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FilterPipe,
    HelpComponent,
    HomeComponent,
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

    CreditorMainComponent,
    CreditorAddComponent,
    CreditorDetailComponent,
    CreditorContactsComponent,
    CreditorContactAddComponent,
    CreditorContactDetailComponent,

    CreditorGroupMainComponent,
    CreditorGroupAddComponent,
    CreditorGroupDetailComponent,
    CreditorGroupContactsComponent,
    CreditorGroupContactAddComponent,
    CreditorGroupContactDetailComponent,
    DetranContactDetailComponent,
    GroupAddComponent,
    GroupMainComponent,
    UserAddComponent,
    UserMainComponent,

    ContractAddComponent,
    ContractMainComponent,

    FinancialTransactionComponent,
    TransactionBillingComponent,
 
    AuditUserDetailComponent,
    AuditGroupDetailComponent,
    AuditContractDetailComponent,
    AuditDetranDetailComponent,
    AuditCreditorDetailComponent,
    FilterEntityNamePipe,
    FilterFeatureNamePipe,
    GroupsDetailComponent,
    FilterStatusPipe,
    FilterDescriptionPipe,
    TableFilterPipe,
    UserDetailComponent,
    FilterUserPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    UserIdleModule,
    CpfCnpjModule,
    CurrencyMaskModule,
    NgbModule,
    FontAwesomeModule,

  ],
  providers: [AuthService, AuthGuard, ExcelService, DownloadFileService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],

})
export class AppModule { 

  constructor(){
    
    library.add(faFilter, faBan, faFileExcel);
  }

}
