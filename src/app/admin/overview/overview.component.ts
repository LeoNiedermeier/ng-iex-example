import {EventListener} from '../../shared/event/event-decorator';
import {EventService} from '../../shared/event/event.service';
import {AuthenticationService} from '../shared/authentication.service';
import {AuthorizationService} from '../shared/authorization.service';
import {LoginEvent} from '../shared/login-event';
import {LogoutEvent} from '../shared/logout-event';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

@Component({
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit, OnDestroy {

  //  private loginSubscription: Subscription;
  //  private logoutSubscription: Subscription;

  hasRoleAdmin: Observable<boolean>;

  constructor(private authenticationService: AuthenticationService,
    private authorizationService: AuthorizationService, private eventService: EventService) {}

  login() {
    console.log('Login');
    this.authenticationService.login();
  }

  logout() {
    console.log('Logout');
    this.authenticationService.logout();
  }
  ngOnInit() {
    // https://loiane.com/2017/08/angular-hide-navbar-login-page/#creating-the-authservice
    this.hasRoleAdmin = this.authorizationService.hasRole('admin');
    //    this.loginSubscription = this.eventService.subscribe(LoginEvent, e => console.log('Login ' + e));
    //    this.logoutSubscription = this.eventService.subscribe(LogoutEvent, e => console.log('logout ' + e));
  }

  ngOnDestroy(): void {
    console.log('unsbiscribe');
    //    this.loginSubscription.unsubscribe();
    //    this.logoutSubscription.unsubscribe();
  }

  @EventListener()
  doSomething(x: LoginEvent) {
    console.log('>>>>>>>>>>>doSomething', x);
  }
}
