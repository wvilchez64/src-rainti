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
        /* if(route.data.roles && route.data.routes.indexOf(currentUser.role) ===-1){
          this._router.navigate(['/'])
          return false
        } */
        console.log(route.url)
        return true 
      }else{
        this._router.navigate(['./login'])
        return false
      }
    }

  
}
