import {DashboardComponent} from './dashboard/dashboard.component';
import {HasRoleAdminGuard} from './shared/has-role-admin.guard';
import {OverviewComponent} from './overview/overview.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// https://auth0.com/blog/angular-2-authentication/

const routes: Routes = [
  {
    path: 'admin',
    component: OverviewComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        // TODO: NavigationCancel Event handling
        canActivate: [HasRoleAdminGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
