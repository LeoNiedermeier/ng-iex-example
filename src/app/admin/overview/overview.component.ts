import {AuthenticationService} from '../shared/authentication.service';
import {AuthorizationService} from '../shared/authorization.service';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

  hasRoleAdmin: Observable<boolean>;

  constructor(private authenticationService: AuthenticationService,
    private authorizationService: AuthorizationService) {}

  login() {
    console.log('Login');
    this.authenticationService.login();
  }

  logout() {
    console.log('Logout');
    this.authenticationService.logount();
  }
  ngOnInit() {
    // https://loiane.com/2017/08/angular-hide-navbar-login-page/#creating-the-authservice
    this.hasRoleAdmin = this.authorizationService.hasRole('admin');
  }

}
