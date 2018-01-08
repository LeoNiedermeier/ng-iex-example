import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthorizationService {

  private readonly roles = new BehaviorSubject<Array<string>>([]);

  constructor() {}

  hasRole(role: string): Observable<boolean> {
    return this.roles.map(r => r.includes(role));
  }


  setRoles(roles: string[]) {
    if (roles) {
      this.roles.next([...roles]);
    } else {
      this.roles.next([]);
    }
  }
}
