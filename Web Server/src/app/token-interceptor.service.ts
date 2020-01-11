import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from "./system-access/system-access-services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req, next){
    let authService = this.injector.get(AuthService)
    let tokenixedReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenixedReq)
  }
}
