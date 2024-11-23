import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';



@Injectable()
export class AutGuard implements CanActivate{

  constructor(private authservice:AuthService ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {

      return this.authservice.isAuthenticated;
  }}
