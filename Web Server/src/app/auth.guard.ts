import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './system-access/system-access-services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auth: AuthService,
    private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const currentUser = this._auth.loggedIn()
      if(currentUser){
       
        console.log(route.component.toString().split(' ')[1].split(' ')[0])
        
        return true 
      }else{
        this._router.navigate(['./login'])
        return false
      }
    }

  
}
