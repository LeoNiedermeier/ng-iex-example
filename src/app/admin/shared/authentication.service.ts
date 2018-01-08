import {EventService} from '../../shared/event/event.service';
import {AuthorizationService} from './authorization.service';
import {LoginEvent} from './login-event';
import {LogoutEvent} from './logout-event';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor(private authorizationService: AuthorizationService, private eventService: EventService) {}

  login() {
    this.authorizationService.setRoles(['admin']);
    this.eventService.publish(new LoginEvent());
  }

  logout() {
    this.authorizationService.setRoles([]);
    this.eventService.publish(new LogoutEvent());
  }
}
