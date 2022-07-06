import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContentComponent } from './add-content/add-content.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'movie', component: MovieComponent},
  {path: 'addMovie', component: AddContentComponent}
];
// loadChildren:  () => import('./movie/movie.component').then(m => m.MovieComponent)
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
