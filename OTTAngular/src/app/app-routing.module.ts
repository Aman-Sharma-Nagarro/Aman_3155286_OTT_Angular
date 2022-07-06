import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { PrimeMemberComponent } from './prime-member/prime-member.component';
import { AuthGuardGuard } from './user/auth-guard.guard';

// 
const routes: Routes = [
  {path:  '', component:  HomeDashboardComponent},
  {path:  'home', component:  HomeDashboardComponent},
  {
    path: 'user', loadChildren:  () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'admin', loadChildren:  () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'prime-member', canActivate:  [AuthGuardGuard], component: PrimeMemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
