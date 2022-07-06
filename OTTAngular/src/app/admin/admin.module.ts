import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MovieComponent } from './movie/movie.component';
import { LoginComponent } from './login/login.component';
import { AddContentComponent } from './add-content/add-content.component';

@NgModule({
  declarations: [
    MovieComponent,
    LoginComponent,
    AddContentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
