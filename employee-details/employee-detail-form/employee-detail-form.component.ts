// import { Component, OnInit } from '@angular/core';
// import { EmployeeDetailService } from 'src/app/shared/employee-detail.service';
// import { NgForm } from '@angular/forms';
// import { EmployeeDetail } from 'src/app/shared/employee-detail.model';
// import { ToastrService } from 'ngx-toastr';
// import { empty } from 'rxjs';


// @Component({
//   selector: 'app-employee-detail-form',
//   templateUrl: './employee-detail-form.component.html',
//   styles: [
//   ]
// })
// export class EmployeeDetailFormComponent implements OnInit {
//   formData:EmployeeDetail=new EmployeeDetail();
//   constructor(public service:EmployeeDetailService,
//     private toastr:ToastrService) { }

//   ngOnInit(): void {
//   }
//   onSubmit(form: NgForm) {

//     if (this.service.formData.empId == 0)
//     {
//     this.formData.empId=form.controls['empId'].value;
//     this.formData.empName=form.controls['empName'].value;
//     this.formData.empSalary=form.controls['empSalary'].value;
//     this.formData.experience=form.controls['experience'].value;
//     this.formData.deptName=form.controls['deptName'].value;
//     this.formData.doj=form.controls['doj'].value;
//     this.formData.empType=Number (form.controls['empType'].value);




//       console.log(this.formData);
//       this.insertEmployee(this.formData,form);}

//   else
//     this.updateEmployee(form);

//   }
//   insertEmployee(form:EmployeeDetail,emp:NgForm)
//   {
//     console.log(form);
//     console.log("insert");

//     this.service.postEmployees(form).subscribe(
//       res=>{
//          this.resetForm(emp);
//          this.toastr.success('Submitted successfully', 'Employee Detail Register')
//          this.service.refreshList();
//     },
//       err=>{console.log(err);}

//     );
//   }
//   updateEmployee(form:NgForm)
//   {
//     this.formData.empId=form.controls['empId'].value;
//     this.formData.empName=form.controls['empName'].value;
//     this.formData.empSalary=form.controls['empSalary'].value;
//     this.formData.experience=form.controls['experience'].value;
//     this.formData.deptName=form.controls['deptName'].value;
//     this.formData.doj=form.controls['doj'].value;
//     this.formData.empType=Number (form.controls['empType'].value);

//     this.service.putEmployee(this.formData).subscribe(
//       res => {
//         this.resetForm(form);
//         this.service.refreshList();
//         this.toastr.info('Updated successfully', 'Employee Detail Register')
//       },
//       err => { console.log(err); }
//     );
//   }
//   resetForm(form:NgForm)
//   {
//     form.form.reset();
//     this.service.formData=new EmployeeDetail();
//   }

// }
