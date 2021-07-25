import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
// import { EmployeeDetailFormComponent } from './employee-details/employee-detail-form/employee-detail-form.component';
 import { LoginComponent } from './login/login.component';
import { GetAllEmployeesComponent } from './get-all-employees/get-all-employees.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    // EmployeeDetailsComponent,
    // EmployeeDetailFormComponent,
    LoginComponent,
    GetAllEmployeesComponent,
    AddemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
