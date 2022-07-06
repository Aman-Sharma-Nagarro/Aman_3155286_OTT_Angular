import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackServiceService {

  constructor(
    private matSnackBar:  MatSnackBar,
    private router: Router
  ) { }

  // This method gets called when a user 
  // Tries to login to a page but is not
  // logged in
  authError() {
    this.matSnackBar.open('You must be logged in!', 'OK', {
      duration: 5000
    });

    return this.matSnackBar._openedSnackBarRef?.onAction()
      .pipe(
        tap( _ => 
            this.router.navigate(['/user/login'])
          )
      )
      .subscribe();
  }
}
