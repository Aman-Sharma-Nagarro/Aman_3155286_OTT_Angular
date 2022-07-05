import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder,
  FormGroup,
  Validator,
  Validators
} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-email-based-login',
  templateUrl: './email-based-login.component.html',
  styleUrls: ['./email-based-login.component.css']
})
export class EmailBasedLoginComponent implements OnInit {

  // form: FormGroup;
  // type: 'login' | 'signup' | 'reset' = 'signup';
  // loading = false;
  // serverMessage:  string;

  // constructor() { }

  ngOnInit(): void {
      
  }
  // ngOnInit(private formBuilder: FormBuilder, private angularFireAuth: AngularFireAuth): void {
  //   this.form = this.formBuilder.group(
  //     {
  //       email:  ['', [Validators.required, Validators.email]],
  //     }
  //   )
  // }

}
