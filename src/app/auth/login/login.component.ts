import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;

  constructor(private adalService: AdalService) { }

  ngOnInit() {
    this.isLoggedIn = this.adalService.userInfo.authenticated;
    }

  login() {
    this.adalService.login();
  }
}
