import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(private readonly authenticationService: AuthenticationService, private readonly router: Router) {}

  ngOnInit() {}

  login() {
    this.authenticationService.login();
    this.router.navigate(['/admin/dashboard']);
  }
}
