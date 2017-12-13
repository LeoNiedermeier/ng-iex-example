import {AuthorizationService} from './authorization.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor(private authorizationService: AuthorizationService) {}

  login() {
    this.authorizationService.setRoles(['admin']);
  }

  logount() {
    this.authorizationService.setRoles([]);
  }
}
