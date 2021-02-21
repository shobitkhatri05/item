import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  arr;

  constructor(private us : LoginService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.us.getData().subscribe(data => { this.arr = data; },
      (err) => {
        console.log(err);
      });
  }

}
