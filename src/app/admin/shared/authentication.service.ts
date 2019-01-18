import { EventService } from '../../shared/event/event.service';
import { AuthorizationService } from './authorization.service';
import { LoginEvent } from './login-event';
import { LogoutEvent } from './logout-event';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService implements OnInit, OnDestroy{
  constructor(
    private readonly authorizationService: AuthorizationService,
    private readonly eventService: EventService,
    private readonly router: Router
  ) {}

  login() {
    this.authorizationService.setRoles(['admin']);
    this.eventService.publish(new LoginEvent());
  }

  logout() {
    this.authorizationService.setRoles([]);
    this.eventService.publish(new LogoutEvent());
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    console.log('AuthenticationService - ON INIT');
  }
  ngOnDestroy(): void {
    console.log('AuthenticationService - ON DESTROY');
  }
}
