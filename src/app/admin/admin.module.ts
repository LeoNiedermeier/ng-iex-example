import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {OverviewComponent} from './overview/overview.component';
import {AuthorizationService} from './shared/authorization.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthenticationService} from './shared/authentication.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    OverviewComponent,
    LoginComponent,
    DashboardComponent],
  providers: [
    AuthorizationService,
    AuthenticationService]
})
export class AdminModule {}
