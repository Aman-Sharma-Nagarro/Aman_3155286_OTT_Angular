import { Injectable } from '@angular/core';
import * as data from '../shared/database/movie.json';
// import {writeJsonFile} from 'write-json-file';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: any = (data as any).default;

  constructor() { }

  getMovies() {
    return this.movies;
  }

  async addMovie(movie: any){
    var counter = 0
    console.log('in addMovie service');
    console.log(movie);
    for (let index = 0; index < this.movies.length; index++) {
      const element = this.movies[index];
      counter += 1;
      console.log(counter)
    }
    movie['id'] = counter +1;
    console.log(movie);
    // await writeJsonFile('movie.json', movie);
    this.movies.push(movie);
  }
  
}
