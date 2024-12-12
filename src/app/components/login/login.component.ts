import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private service: RecipeService) { }

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

  signInWithGoogle() {
    this.service.googleSignIn();
  }

}
