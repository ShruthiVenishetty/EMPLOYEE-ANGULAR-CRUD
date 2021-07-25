import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ResponseModel } from './responseModel';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   userName: string;
   password: string;
   formDatas: FormGroup;
   un:boolean;
   isUserLoggedIn: boolean = false;
   resModel :ResponseModel;
   constructor(private authService : AuthService, private router : Router) { }

   ngOnInit() {
      this.formDatas = new FormGroup({
         userName: new FormControl(""),
         password: new FormControl(""),
      });
   }

   onClickSubmit(data: any) {
      this.userName = data.userName;
      this.password = data.password;

      console.log("Login page: " + this.userName);
      console.log("Login page: " + this.password);

      this.authService.login(this.userName, this.password)
          .subscribe(response => {
            var res = response.status;
           console.log(response);
            if(res==200)
            {

             this.resModel = response.body;
               console.log(this.resModel.access_token);
               localStorage.setItem('isUserLoggedIn',"true");

               localStorage.setItem('Token', this.resModel.access_token);
               if(this.resModel.role_of_employee == "Tester")
               {
               this.router.navigate(['/View_employee'])
               this.isUserLoggedIn=true;
               console.log(this.isUserLoggedIn=true);
               }
               else if(this.resModel.role_of_employee == "Manager")
               {
                 this.router.navigate(['/View_All_employees'])
                 this.isUserLoggedIn=true;

               }


            }
            else
            {
               localStorage.setItem('isUserLoggedIn',"false");

               this.isUserLoggedIn=false;
            }

         })

   }
}


