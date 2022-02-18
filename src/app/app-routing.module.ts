import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';

import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { LibrarianDetailsComponent } from './component/librarian-details/librarian-details.component';
import { LoginComponent } from './component/login/login.component';

import { RegistrationComponent } from './component/registration/registration.component';
import { ViewbooksComponent } from './component/viewbooks/viewbooks.component';

const routes: Routes = [
  {path:"registration",component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"admin-login",component:AdminLoginComponent},
  {path:"admin-dashboard",component:AdminDashboardComponent},
  {path:"librarian-details",component:LibrarianDetailsComponent},
  {path:"viewbooks",component:ViewbooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
