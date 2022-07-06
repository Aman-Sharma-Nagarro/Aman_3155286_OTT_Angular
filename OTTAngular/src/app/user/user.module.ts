import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { GoogleSigninDirective } from './google-signin.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailBasedLoginComponent } from './email-based-login/email-based-login.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { WatchedComponent } from './watched/watched.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    GoogleSigninDirective,
    EmailBasedLoginComponent,
    FavouriteComponent,
    WatchedComponent,
    WatchLaterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
