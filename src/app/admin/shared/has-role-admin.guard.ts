import {AuthorizationService} from './authorization.service';
import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HasRoleAdminGuard implements CanActivate {

  constructor(private authorizationService: AuthorizationService) {

    console.log(' -> HasRoleAdminGuard');
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authorizationService.hasRole('admin');
  }
}

