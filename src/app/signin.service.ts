import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { RegisterService } from './register.service';


@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private user : RegisterService, private router:Router) { }
  canActivate(){
    return this.user.getJwt()? true : this.router.parseUrl('/login');
  }
}
