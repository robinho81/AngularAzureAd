import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private adalService: AdalService) { }

  ngOnInit() {

  }

  logout(): void {
    this.adalService.logOut();
  }

}
