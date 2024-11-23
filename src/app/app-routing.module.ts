import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoadPayementComponent } from './load-payement/load-payement.component';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { LoginComponent } from './login/login.component';
import { PayementComponent } from './payement/payement.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentsComponent } from './students/students.component';

import { AutGuard } from './guard/auth.guard';
import { AuthorizationGuard } from './guard/authorization.guard';
import { NewPayementComponent } from './new-payement/new-payement.component';
import { PayementDetailsComponent } from './payement-details/payement-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
const routes: Routes = [
  {
    path :"", component:LoginComponent
  },

  {
    path :"admin", component:AdminTemplateComponent, canActivate:[AutGuard],children:[{
      path :"home", component:HomeComponent
    },
    {
      path :"profile", component:ProfileComponent
    },


    {
      path :"loadStudents", component:LoadStudentsComponent,
      canActivate:[AuthorizationGuard], data:{roles:['ADMIN']}
    },

    {
      path :"loadPayements", component:LoadPayementComponent
    },

    {
      path :"Students", component:StudentsComponent
    },
    {
      path :"Payements", component:PayementComponent
    },
    {
      path:"student-details/:code", component:StudentDetailsComponent
    },
    {path:"payement-details/:id", component:PayementDetailsComponent
    },
    {
      path:"new-payement/:studentCodes", component:NewPayementComponent
    },
    {
      path :"dashboard", component:DashboardComponent
    },]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
