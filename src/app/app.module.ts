
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AutGuard } from './guard/auth.guard';
import { AuthorizationGuard } from './guard/authorization.guard';
import { HomeComponent } from './home/home.component';
import { LoadPayementComponent } from './load-payement/load-payement.component';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { LoginComponent } from './login/login.component';
import { NewPayementComponent } from './new-payement/new-payement.component';
import { PayementComponent } from './payement/payement.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsComponent } from './students/students.component';
import { PayementDetailsComponent } from './payement-details/payement-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminTemplateComponent,
    HomeComponent,
    ProfileComponent,
    LoadPayementComponent,
    LoadStudentsComponent,
    LoginComponent,
    PayementComponent,
    StudentsComponent,
    DashboardComponent,
    StudentDetailsComponent,
    NewPayementComponent,
    PayementDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    PdfViewerModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    HttpClientModule

  ],
  providers: [
    AutGuard, AuthorizationGuard,DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
