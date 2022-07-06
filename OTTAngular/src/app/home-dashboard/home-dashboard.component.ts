import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Movie } from '../shared/movie.model';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {
  movies: Movie[] = this.movieService.getMovies();

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
  }

}
