import { Component, OnInit } from '@angular/core';
import { EmployeeDetailService} from 'src/app/shared/employee-detail.service';
import { EmployeeDetail } from 'src/app/shared/employee-detail.model';
import { ToastrService } from 'ngx-toastr';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  formData:EmployeeDetail=new EmployeeDetail();

  constructor(public service:EmployeeDetailService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm)
  {
     this.formData.employeeId=form.controls['employeeId'].value;
    this.formData.employeeName=form.controls['employeeName'].value;
    this.formData.salary=form.controls['salary'].value;
    this.formData.departmentName=form.controls['departmentName'].value;
    this.formData.dateOfJoining=form.controls['dateOfJoining'].value;
    this.formData.empType=form.controls['empType'].value;

      console.log(this.formData);
      this.insertEmployee(this.formData,form);


  }
  insertEmployee(form:EmployeeDetail,emp:NgForm)
  {
    console.log(form);
    console.log("insert");

    this.service.postEmployees(form).subscribe(
      res=>{
         this.resetForm(emp);
         this.toastr.success('Submitted successfully', 'Employee Detail Register')
         this.service.refreshList();
    },
      err=>{console.log(err);}

    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData=new EmployeeDetail();
  }

}
