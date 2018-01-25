import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthorizationService {

  // BehaviorSubject merkt sich das letzte Element, das dann die neuen Subscribers auch bekommen.
  // https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/behaviorsubject.md
  private readonly roles = new BehaviorSubject<Array<string>>([]);

  constructor() {}

  hasRole(role: string): Observable<boolean> {
    // map ist rxjs Operator, hier Array<string> wird auf boolean Observable abgebildet.
    return this.roles.map(
      // includes ist eine Array Methode. Überprüft, ob das übergebene Element im Array vorhanden ist.
      // Da eine Observable zurückgegeben wird, wird der Ausdruch erst später ausgewertet.
      r => r.includes(role));
  }


  setRoles(roles: string[]) {
    // reicht die übergebenen Rollen weiter in das BehaviorSubject und die Subscribers
    // (Observablesm die von hasRole zurückgegeben werden).
    if (roles) {
      // ... löst den array auf -> [...roles] erzeugt eine Kopie des originalen Arrays
      this.roles.next([...roles]);
    } else {
      this.roles.next([]);
    }
  }
}
