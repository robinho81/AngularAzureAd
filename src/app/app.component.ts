import { Component, OnInit } from '@angular/core';
import { AdalService } from '../../node_modules/adal-angular4';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isLoggedIn = false;
  userName = '';
  constructor(private adalService: AdalService) {
    this.adalService.init(environment.adalConfig);

  }

  ngOnInit(): void {
      // The handleWindowCallback call will extract the bearer token from the URL when Azure returns to our application after sign-in.
      this.adalService.handleWindowCallback();

      this.isLoggedIn = this.adalService.userInfo.authenticated;
      if (this.isLoggedIn) {
        this.userName = this.adalService.userInfo.userName;
      }
  }
}
