import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthorizationService {

  private roles = new BehaviorSubject<Array<string>>([]);

  constructor() {}

  hasRole(role: string): Observable<boolean> {
    return this.roles.map(r => r.indexOf(role) > -1);
  }

  setRoles(roles: string[]) {
    if (roles) {
      this.roles.next(roles.slice(0));
    } else {
      this.roles.next([]);
    }
  }
}
