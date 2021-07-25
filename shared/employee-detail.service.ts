import { Injectable } from '@angular/core';
import { EmployeeDetail } from './employee-detail.model';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {

  constructor(private http:HttpClient) { }

  formData:EmployeeDetail;

  list:EmployeeDetail[];
  readonly baseURL='https://localhost:44330/api/Employee';
  getEmployee(){
    var x = localStorage.getItem("Token");
    const headers = {
       'content-type': 'application/json',
      'Authorization':'Bearer '+x
     }

    console.log(headers);
    return this.http.get(this.baseURL + '/All',{'headers':headers});
  }

  postEmployees(employee:EmployeeDetail){
    var x = localStorage.getItem("Token");
    const headers = {
       'content-type': 'application/json',
      'Authorization':'Bearer '+x
     }
     console.log(employee.employeeName);
    return this.http.post(this.baseURL,employee,{'headers':headers})
  }
//POST request with body equal on data in JSON format

  putEmployee() {
    //return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
    var x = localStorage.getItem("Token");
    const headers = { 'content-type': 'application/json', 'Authorization':'Bearer '+x}

    var eid=this.formData.employeeId;

    return this.http.put(this.baseURL+'/'+eid, this.formData,{'headers':headers})

  }

  deleteEmployee(id: number) {
    var x = localStorage.getItem("Token");
    const headers = { 'content-type': 'application/json', 'Authorization':'Bearer '+x}


    console.log(id);
    return this.http.delete(`${this.baseURL}/${id}`,{'headers':headers});
  }
  refreshList() {

    var x = localStorage.getItem("Token");
    const headers = {
       'content-type': 'application/json',
      'Authorization':'Bearer '+x
     }
     return this.http.get(this.baseURL + '/All',{'headers':headers})
      .subscribe(res =>this.list = res as EmployeeDetail[]);
  }
}
