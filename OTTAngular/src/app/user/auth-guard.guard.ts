import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { SnackServiceService } from '../services/snack-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(
    private angularFireAuth:  AngularFireAuth,
    private snack:  SnackServiceService
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ):  Promise<boolean> {
      const currentUser = await this.angularFireAuth.currentUser;
      const isLoggedInUser = !!currentUser;
      if (!isLoggedInUser) {
        this.snack.authError();
      }
      return isLoggedInUser;
  }
  
}
