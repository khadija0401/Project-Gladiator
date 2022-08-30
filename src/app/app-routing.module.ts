import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './components/access/access.component';
import { HomeComponent } from './components/home/home.component';
import { InstituteHomeComponent } from './components/institute-home/institute-home.component';
import { LoginStateMinistryComponent } from './components/login-state-ministry/login-state-ministry.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AcademicDetailsComponent } from './components/register-scholarship/academic-details/academic-details.component';
import { BasicDetailsComponent } from './components/register-scholarship/basic-details/basic-details.component';
import { DocumentsDetailsComponent } from './components/register-scholarship/documents-details/documents-details.component';
import { MarksFeesDetailsComponent } from './components/register-scholarship/marks-fees-details/marks-fees-details.component';
import { PersonalContactDetailsComponent } from './components/register-scholarship/personal-contact-details/personal-contact-details.component';
import { RegisterScholarshipComponent } from './components/register-scholarship/register-scholarship.component';
import { RegisterComponent } from './components/register/register.component';
import { ScholarshipDetailsComponent } from './components/student-home/scholarship-details/scholarship-details.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { AuthGuard } from './services/auth.guard';
import { MinistryHomeComponent } from './components/ministry-home/ministry-home.component';
import { StudentApplicationsComponent } from './components/ministry-home/student-applications/student-applications.component';
import { InstituteApplicationsComponent } from './components/ministry-home/institute-applications/institute-applications.component';
import { MinistryScholarshipsComponent } from './components/ministry-home/ministry-scholarships/ministry-scholarships.component';
import { ViewMinistryInstituteApplicationsComponent } from './components/ministry-home/institute-applications/view-ministry-institute-applications/view-ministry-institute-applications.component';
import { AddScholarshipComponent } from './components/ministry-home/ministry-scholarships/add-scholarship/add-scholarship.component';
import { EditScholarshipComponent } from './components/ministry-home/ministry-scholarships/edit-scholarship/edit-scholarship.component';
import { ViewMinistryStudentApplicationsComponent } from './components/ministry-home/student-applications/view-ministry-student-applications/view-ministry-student-applications.component';
import { StateHomeComponent } from './components/state-home/state-home.component';
import { StateStudentApplicationsComponent } from './components/state-home/state-student-applications/state-student-applications.component';
import { StateInstituteApplicationsComponent } from './components/state-home/state-institute-applications/state-institute-applications.component';
import { ViewStudentApplicationsComponent } from './components/state-home/state-student-applications/view-student-applications/view-student-applications.component';
import { ViewInstituteApplicationsComponent } from './components/state-home/state-institute-applications/view-institute-applications/view-institute-applications.component';
import { InstituteRegisterComponent } from './components/institute-register/institute-register.component';
import { InstituteLoginComponent } from './components/institute-login/institute-login.component';
import { InstituteStudentApplicationsComponent } from './components/institute-home/institute-student-applications/institute-student-applications.component';
import { StateLoginComponent } from './components/state-login/state-login.component';
import { AboutusComponent } from './components/home/aboutus/aboutus.component';
import { ContactusComponent } from './components/home/contactus/contactus.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'access',
    component: AccessComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home/studenthome',
    component: StudentHomeComponent
  },
  {
    path: 'loginStateMinistry',
    component: LoginStateMinistryComponent
  },
  {
    path: 'registerScholarship',
    component: RegisterScholarshipComponent
  },
  {
    path: 'registerScholarship/basic-details',
    component: BasicDetailsComponent
  },
  {
    path: 'registerScholarship/academic-details',
    component: AcademicDetailsComponent
  },
  {
    path: 'registerScholarship/marks-fees-details',
    component: MarksFeesDetailsComponent
  },
  {
    path: 'registerScholarship/personal-contact-details',
    component: PersonalContactDetailsComponent
  },
  {
    path: 'registerScholarship/documents-details',
    component: DocumentsDetailsComponent
  },
  {
    path: 'institute-home',
    component: InstituteHomeComponent
  },
  {
    path: 'institute-student-application/:id',
    component: InstituteStudentApplicationsComponent
  },
  {
    path: 'scholarship-details/:id',
    component: ScholarshipDetailsComponent
  },
  {
    path: 'ministryhome',
    component: MinistryHomeComponent
  },
  {
    path: 'institute-login',
    component: InstituteLoginComponent
  },
  {
    path: 'state-login',
    component: StateLoginComponent
  },
  {path: 'ministrystudentapplications', component: StudentApplicationsComponent},
  {path: 'ministryinstituteapplications', component: InstituteApplicationsComponent},
  {path: 'ministryscholarships', component: MinistryScholarshipsComponent},
  {path: 'viewministryinstituteapplications', component: ViewMinistryInstituteApplicationsComponent},
  {path: 'viewministryinstituteapplications/:id', component: ViewMinistryInstituteApplicationsComponent},
  {path: 'viewministrystudentapplications/:id', component: ViewMinistryStudentApplicationsComponent},
  {path: 'addscholarship', component: AddScholarshipComponent},
  {path: 'deletescholarship/:id', component: AddScholarshipComponent},
  {path: 'editscholarship/:id', component: EditScholarshipComponent},
  {path: 'statehome', component: StateHomeComponent},
  {path: 'statestudentapplications', component: StateStudentApplicationsComponent},
  {path: 'stateinstituteapplications', component: StateInstituteApplicationsComponent},
  {path: 'viewstateinstituteapplications/:id', component: ViewInstituteApplicationsComponent},
  // {path: 'viewstatestudentapplications', component: ViewStudentApplicationsComponent},
  {path: 'viewstatestudentapplications/:id', component: ViewStudentApplicationsComponent},
  
  {path: 'instituteregister', component: InstituteRegisterComponent},
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
