import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { FavouriteComponent } from './favourite/favourite.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { WatchedComponent } from './watched/watched.component';

const routes: Routes = [
  { path:  '', component:  LoginPageComponent },
  { path: 'login', component: LoginPageComponent},
  {
    path: 'favourite', canActivate:  [AuthGuardGuard], component: FavouriteComponent
  },
  {
    path: 'watched', canActivate:  [AuthGuardGuard], component: WatchedComponent
  },
  {
    path: 'watch-later', canActivate:  [AuthGuardGuard], component: WatchLaterComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
