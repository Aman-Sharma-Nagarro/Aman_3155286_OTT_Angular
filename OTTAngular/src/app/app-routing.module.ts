import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';

const routes: Routes = [
  {path:  '', component:  HomeDashboardComponent},
  {path:  'home', component:  HomeDashboardComponent},
  {
    path: 'login', loadChildren:  () => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
