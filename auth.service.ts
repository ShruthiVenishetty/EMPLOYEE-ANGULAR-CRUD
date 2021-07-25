import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import {HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
   providedIn: 'root'
})
export class AuthService {
   constructor(private http:HttpClient) { }
   isUserLoggedIn: boolean = false;
   readonly baseURL='https://localhost:44330/api/Login/Login';

   login(userName: string, password: string): Observable <any>{
      console.log(userName);
      console.log(password);
      return this.http.post(this.baseURL,{
         "email": userName,
         "password": password
       }, {observe: 'response'})}

   logout(): void {
   this.isUserLoggedIn = false;
      localStorage.removeItem('isUserLoggedIn');
   }


}
