import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { UserService } from '../services/user.service';
import { Movie } from '../shared/movie.model';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {
  movies: Movie[] = this.movieService.getMovies();

  constructor(private movieService: MovieService,
    private router: Router,
    private userService: UserService,
    private angularFireAuth: AngularFireAuth
    ) { }

  ngOnInit(): void {
  }

  addFavourite(movie: Movie){
    console.log('in add fav');
    this.userService.addFavourite(movie);
    // this.router.navigate(['/user/favourite']);
  }

  addWatchLater(movie: Movie){
    console.log('in Add Watch Later');
    this.angularFireAuth.authState.subscribe(user => {
      if (user){
        console.log('adding to Watch Later', movie.id, user.email);
      } else {
        console.log('PLEASE LOGIN - NOT adding to Watch Later', movie.id);
        this.router.navigate(['/user'])
      }
    })
  }

  addWatched(movie: Movie){
    this.angularFireAuth.authState.subscribe(user => {
      if (user){
        console.log('adding to Watched', movie.id, user.email);
      } else {
        console.log('PLEASE LOGIN - NOT adding to Watched', movie.id);
        this.router.navigate(['/user'])
      }
    })
  }

}
