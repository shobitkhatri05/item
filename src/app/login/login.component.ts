import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email;
  Password;

  constructor(private user : RegisterService) { }

  ngOnInit() {
  }

  Login(){
    this.user.Login(this.Email,this.Password);
  }

}
