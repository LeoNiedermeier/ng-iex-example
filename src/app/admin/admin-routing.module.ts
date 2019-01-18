import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

// Achtung: Reihenfolge wichtig: HasRoleAdminGuard nach OverviewComponent
import { OverviewComponent } from './overview/overview.component';
import { HasRoleAdminGuard } from './shared/has-role-admin.guard';
import { LoginComponent } from './login/login.component';

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
      },
      { path: '**', redirectTo: '/login' }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [HasRoleAdminGuard]
})
export class AdminRoutingModule {}
