import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { GoogleSigninDirective } from './google-signin.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailBasedLoginComponent } from './email-based-login/email-based-login.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    GoogleSigninDirective,
    EmailBasedLoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }