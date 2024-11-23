import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'  // Fournit le guard à l'échelle de l'application
})
export class AuthorizationGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (this.authService.isAuthenticated) {

      let requiredRoles = route.data['roles'];
      let userRoles: string[]=this.authService.roles;

      for(let role of userRoles){
        if(requiredRoles.includes(role)){
          return true;
        }
      }

      return false;
      // Autorise l'accès si l'utilisateur est authentifié
    } else {
      // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
      return this.router.createUrlTree(['']);
    }
  }
}
