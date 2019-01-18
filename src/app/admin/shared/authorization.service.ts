import {EventListener} from '../../shared/event/event-decorator';
import {LoginEvent} from './login-event';
import {Injectable, OnInit, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable()
export class AuthorizationService implements OnInit, OnDestroy {

  // BehaviorSubject merkt sich das letzte Element, das dann die neuen Subscribers auch bekommen.
  // https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/behaviorsubject.md
  private readonly roles = new BehaviorSubject<Array<string>>([]);

  constructor() {
  }

  hasRole(role: string): Observable<boolean> {
    // map ist rxjs Operator, hier Array<string> wird auf boolean Observable abgebildet.
    return this.roles.pipe(map(
      // includes ist eine Array Methode. Überprüft, ob das übergebene Element im Array vorhanden ist.
      // Da eine Observable zurückgegeben wird, wird der Ausdruch erst später ausgewertet.
      r => r.includes(role)));
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
  ngOnInit(): void {
    console.log('ON INIT');
  }
  ngOnDestroy(): void {
    console.log('ON DESTROY');
  }

  @EventListener()
  doSomething(x: LoginEvent) {
    console.log('>>>>>>>>>>>AuthorizationService', x);
  }
}
