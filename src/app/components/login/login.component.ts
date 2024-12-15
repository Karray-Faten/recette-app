import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private service: RecipeService,private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  login() {
    // Validate inputs
    if (this.email === '') {
      alert('Please enter email');
      return;
    }

    if (this.password === '') {
      alert('Please enter password');
      return;
    }

    // Call login service method
    this.service.login(this.email, this.password)
      .then(() => {
        // Successful login, email and password fields are reset
        this.email = '';
        this.password = '';
      })
      .catch(() => {
        // Handle error if login failed (error is already displayed in the service)
        this.email = '';
        this.password = '';
      });
  }

  googleSignIn() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        console.log('Sign-in successful:', result);
      })
      .catch((error) => {
        console.error('Error during Google sign-in:', error);
      });
  }

}
