import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Name;
  Email;
  Phone;
  Password;
  ConfirmPassword;

  constructor(private user : RegisterService) { }

  ngOnInit() {
  }

  SignUp(){
    this.user.SignUp(this.Name,this.Email,this.Phone,this.Password,this.ConfirmPassword);
    console.log(this.Name)
  }

}
