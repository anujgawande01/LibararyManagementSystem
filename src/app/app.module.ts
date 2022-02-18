import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { LibrarianDetailsComponent } from './component/librarian-details/librarian-details.component';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { MenuComponent } from './component/menu/menu.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ViewbooksComponent } from './component/viewbooks/viewbooks.component';
import { ReportGenerationComponent } from './component/report-generation/report-generation.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    MenuComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    LibrarianDetailsComponent,
    ViewbooksComponent,
    ReportGenerationComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    ReactiveFormsModule, 
    FormsModule, 
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
