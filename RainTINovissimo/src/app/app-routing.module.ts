import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { ContractsComponent } from './pages/account/contracts/contracts.component';
import { DetranComponent } from './pages/detran-list/detran-list.component';
import { DetranRegisterComponent } from './pages/detran-register/detran-register.component';



const routes: Routes = [
 
  {
    path:'',
    component: FramePageComponent,
    children:[
      {path: '', component: HomepageComponent}
    ]

  },
  {
    path:'',
    component: FramePageComponent,
    children:[
      {path: 'contracts', component: ContractsComponent}
    ]

  },
  {
    path:'account',
    component: FramePageComponent,
    children:[
      {path:'homepage', component: HomepageComponent},
    ]

  },

  {
    path:'',
    component: FramePageComponent,
    children:[
      {path:'detran', component: DetranComponent},
    ]

  },

  {
    path:'',
    component: FramePageComponent,
    children:[
      {path:'detranregister', component: DetranRegisterComponent},
    ]

  },

    {path:'login', component: LoginPageComponent},
    {path: 'signup', component: SignupPageComponent},
    {path: 'reset-password', component:ResetPasswordPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
