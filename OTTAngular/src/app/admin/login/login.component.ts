import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email:  new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  loading = false;
  serverMessage?: string;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    // this.createAdminUser();
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  async createAdminUser() {
    try{
      await this.angularFireAuth.createUserWithEmailAndPassword('aman.sharma@nagarro.com', '1qaz2wsx');
    } catch (err: any){
      console.log(err);
    }
  }

  async onSubmit()  {
    this.loading = true;
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    try{
      if (email !== null && email !== undefined && password !== null && password !== undefined && email === 'aman.sharma@nagarro.com' && password === '1qaz2wsx') {
        console.log('in sign in admin')
        await this.angularFireAuth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['/admin/movie'])
      }  
    } catch (err: any){
      this.serverMessage = err;
    }
    this.loading = false;
  }

}
