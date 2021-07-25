import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
// import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { GetAllEmployeesComponent } from './get-all-employees/get-all-employees.component';
import { LoginComponent } from './login/login.component';
import { EmployeeDetail } from './shared/employee-detail.model';
import { ValidUserGuard } from './valid-user.guard';

const routes: Routes =
 [
  {path:"login", component:LoginComponent},
  // {path:'View_employee', component:EmployeeDetailsComponent,canActivate:[ValidUserGuard]},
  {path:'View_All_employees', component:GetAllEmployeesComponent},
  {path:'add_employee', component:AddemployeeComponent},
{ path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
