import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {HasRoleAdminGuard} from './shared/has-role-admin.guard';
import {OverviewComponent} from './overview/overview.component';
import {AuthorizationService} from './shared/authorization.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthenticationService} from './shared/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    OverviewComponent,
    DashboardComponent],
  providers: [
    AuthorizationService,
    AuthenticationService]
})
export class AdminModule {}
