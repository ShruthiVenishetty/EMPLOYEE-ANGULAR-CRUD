// import { Component, OnInit } from '@angular/core';
// import { EmployeeDetail } from '../shared/employee-detail.model';
// import { EmployeeDetailService } from '../shared/employee-detail.service';
// import { ToastrService } from 'ngx-toastr';


// @Component({
//   selector: 'app-employee-details',
//   templateUrl: './employee-details.component.html',
//   styles: [
//   ]
// })
// export class EmployeeDetailsComponent implements OnInit {

//   constructor(public service:EmployeeDetailService,private toastr: ToastrService) { }

//   ngOnInit(): void {
//     this.service.refreshList();
//     this.service.getEmployee().subscribe(data=>console.log(data));
//   }
//   populateForm(selectedRecord: EmployeeDetail) {
//     this.service.formData = Object.assign({}, selectedRecord);
//   }
//   onDelete(id: number) {
//     if (confirm('Are you sure to delete this record?')) {
//       this.service.deleteEmployee(id)
//         .subscribe(
//           res => {
//             this.service.refreshList();
//             this.toastr.error("Deleted successfully", 'Employee Detail Register');
//           },
//           err => { console.log(err) }
//         )
//     }
//   }

// }
