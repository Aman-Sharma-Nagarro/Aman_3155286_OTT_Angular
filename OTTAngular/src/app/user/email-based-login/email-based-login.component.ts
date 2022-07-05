import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder,
  FormControl,
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

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.maxLength(6), Validators.required]),
    confirmPassword:  new FormControl('', [])
  });

  type: 'login' | 'signup' | 'reset' = 'signup';
  loading = false;
  serverMessage?:  string;

  constructor(private formBuilder: FormBuilder, private angularFireAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  changeTypeOfForm(val: 'login' | 'signup' | 'reset') {
    this.type = val;
  }

  get isLoginType() {
    return this.type === 'login';
  }

  get isSignupType() {
    return this.type === 'signup';
  }

  get isResetType() {
    return this.type === 'reset';
  }

  get email() {
    return this.form?.get('email');
  }

  get password() {
    return this.form?.get('password');
  }

  get confirmPassword() {
    return this.form?.get('confirmPassword');
  }

  get passwordDoesMatchToConfirmPassword() {
    if (this.type !== 'signup'){
      return true;
    } else{
      return this.password?.value === this.confirmPassword?.value
    }
  }

  async onSubmit() {
    this.loading = true;
    const email = this.form.value.email;
    const password = this.form.value.password;

    try {
      if (email !== null && email !== undefined && password !== null && password !== undefined) {
        if (this.isLoginType) {
            await this.angularFireAuth.signInWithEmailAndPassword(email, password);
          }
        if (this.isSignupType) {
          await this.angularFireAuth.createUserWithEmailAndPassword(email, password);
        }
        if (this.isResetType) {
          await this.angularFireAuth.sendPasswordResetEmail(email);
          this.serverMessage = 'Check your email.'
        }
      }
    } catch (err: any) {
      this.serverMessage = err;
    }

    this.loading = false;

  }

}
