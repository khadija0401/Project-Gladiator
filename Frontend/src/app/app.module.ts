import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './components/home/home.component';
import { AccessComponent } from './components/access/access.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { LoginStateMinistryComponent } from './components/login-state-ministry/login-state-ministry.component';
import { RegisterScholarshipComponent } from './components/register-scholarship/register-scholarship.component';
import { BasicDetailsComponent } from './components/register-scholarship/basic-details/basic-details.component';
import { AcademicDetailsComponent } from './components/register-scholarship/academic-details/academic-details.component';
import { MarksFeesDetailsComponent } from './components/register-scholarship/marks-fees-details/marks-fees-details.component';
import { PersonalContactDetailsComponent } from './components/register-scholarship/personal-contact-details/personal-contact-details.component';
import { DocumentsDetailsComponent } from './components/register-scholarship/documents-details/documents-details.component';
import { InstituteHomeComponent } from './components/institute-home/institute-home.component';
import { ScholarshipDetailsComponent } from './components/student-home/scholarship-details/scholarship-details.component';
import { MinistryHomeComponent } from './components/ministry-home/ministry-home.component';
import { InstituteApplicationsComponent } from './components/ministry-home/institute-applications/institute-applications.component';
import { MinistryScholarshipsComponent } from './components/ministry-home/ministry-scholarships/ministry-scholarships.component';
import { AddScholarshipComponent } from './components/ministry-home/ministry-scholarships/add-scholarship/add-scholarship.component';
import { EditScholarshipComponent } from './components/ministry-home/ministry-scholarships/edit-scholarship/edit-scholarship.component';
import { StudentApplicationsComponent } from './components/ministry-home/student-applications/student-applications.component';
import { ViewMinistryStudentApplicationsComponent } from './components/ministry-home/student-applications/view-ministry-student-applications/view-ministry-student-applications.component';
import { ViewMinistryInstituteApplicationsComponent } from './components/ministry-home/institute-applications/view-ministry-institute-applications/view-ministry-institute-applications.component';
import { StateHomeComponent } from './components/state-home/state-home.component';
import { StateInstituteApplicationsComponent } from './components/state-home/state-institute-applications/state-institute-applications.component';
import { ViewInstituteApplicationsComponent } from './components/state-home/state-institute-applications/view-institute-applications/view-institute-applications.component';
import { StateStudentApplicationsComponent } from './components/state-home/state-student-applications/state-student-applications.component';
import { ViewStudentApplicationsComponent } from './components/state-home/state-student-applications/view-student-applications/view-student-applications.component';
import { InstituteRegisterComponent } from './components/institute-register/institute-register.component';
import { InstituteLoginComponent } from './components/institute-login/institute-login.component';
import { InstituteStudentApplicationsComponent } from './components/institute-home/institute-student-applications/institute-student-applications.component';
import { StateLoginComponent } from './components/state-login/state-login.component';
import { AboutusComponent } from './components/home/aboutus/aboutus.component';
import { ContactusComponent } from './components/home/contactus/contactus.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AccessComponent,
    PageNotFoundComponent,
    StudentHomeComponent,
    LoginStateMinistryComponent,
    RegisterScholarshipComponent,
    BasicDetailsComponent,
    AcademicDetailsComponent,
    MarksFeesDetailsComponent,
    PersonalContactDetailsComponent,
    DocumentsDetailsComponent,
    InstituteHomeComponent,
    ScholarshipDetailsComponent,
    MinistryHomeComponent,
    InstituteApplicationsComponent,
    MinistryScholarshipsComponent,
    AddScholarshipComponent,
    EditScholarshipComponent,
    StudentApplicationsComponent,
    ViewMinistryStudentApplicationsComponent,
    ViewMinistryInstituteApplicationsComponent,
    StateHomeComponent,
    StateInstituteApplicationsComponent,
    ViewInstituteApplicationsComponent,
    StateStudentApplicationsComponent,
    ViewStudentApplicationsComponent,
    InstituteRegisterComponent,
    InstituteLoginComponent,
    InstituteStudentApplicationsComponent,
    StateLoginComponent,
    AboutusComponent,
    ContactusComponent,
    ForgotpasswordComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
