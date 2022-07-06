import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service'; 
import { Movie } from 'src/app/shared/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Movie[] = this.movieService.getMovies();

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
  }

  addContent(){
    this.router.navigate(['/admin/addMovie'])
  }

}
