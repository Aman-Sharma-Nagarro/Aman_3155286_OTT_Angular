import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(private userService: UserService) { }

  fav = this.userService.getFavourite();
  ngOnInit(): void {
    console.log(this.fav);
  }

}
