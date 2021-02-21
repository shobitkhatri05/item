import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { RegisterService } from './register.service';
@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private user : RegisterService, private router:Router) { }
  canActivate(){
    return this.user.getJwt() ? this.router.parseUrl('/login'):true;
  }
}
