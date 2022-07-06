import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service'; 

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {

    contentForm = new FormGroup({
      name:  new FormControl('', []),
      type: new FormControl('', []),
      title: new FormControl('', []),
      description:  new FormControl('', []),
      languare: new FormControl('', []),
      genere: new FormControl('', []),
      imdb: new FormControl('', [])
    });

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
  }

  get name() {
    return this.contentForm.get('name');
  }

  onSubmit() {

    const name = this.contentForm.value.name;
    const type = this.contentForm.value.type;
    const title = this.contentForm.value.title;
    const description = this.contentForm.value.description;
    const language = this.contentForm.value.languare;
    const genere = this.contentForm.value.genere;
    const imdb = this.contentForm.value.imdb;
    console.log(this.contentForm);

    const movie = {
      name: name,
      type: type,
      title: title,
      description: description,
      language: language,
      genere: genere,
      imdb: imdb
    }

    this.movieService.addMovie(movie);
    this.router.navigate(['/admin/movie'])
  }

}
