import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Movie } from '../shared/movie.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  favourite: any;
  watched: any;
  watchLater: any;
  

  constructor(private angularFireAuth: AngularFireAuth,
      private router: Router
    ) {
      this.favourite = [];
      this.watched = [];
      this.watchLater = [];
     }

  addFavourite(movie: Movie){
    this.angularFireAuth.authState.subscribe(user => {
      if (user){
        this.favourite.push(movie)
        console.log('adding to favourite', movie.id, user.email);
      } else {
        console.log('PLEASE LOGIN - not adding to favourite');
        this.router.navigate(['/user'])
      }
    })
  }

  getFavourite(): any {
    this.angularFireAuth.authState.subscribe(user => {
      if (user){
        for (let index = 0; index < this.favourite.length; index++) {
          const element = this.favourite[index];
          console.log(element);
          return element
        }
      } else {
        this.router.navigate(['/user'])
        console.log('PLEASE LOGIN - adding to favourite');
      }
    })

  }
}
