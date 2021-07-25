import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidUserGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
      let url: string = state.url;
      var  val  = localStorage.getItem('isUserLoggedIn') as string;
      return this.checkLogin(url,val);
  }
  checkLogin(url: string,val:string): true | UrlTree {
    console.log("Url: " + url)

    if(val != null && val == "true"){
       if(url == "/login")
         return this.router.parseUrl('/view_employee');
       else
          return true;
    } else {
       return this.router.parseUrl('/login');
    }

 }


  }
