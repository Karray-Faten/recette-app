import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider,  } from 'firebase/auth';  // Import FirebaseError for better error typing
import { Router } from '@angular/router';
import { FirebaseError } from '@angular/fire/app';
import { TokenService } from './token-service.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private afAuth: AngularFireAuth, private router: Router, private tokenService:TokenService) { }

  // login method
  login(email: string, password: string): Promise<void> {
    return this.afAuth.signInWithEmailAndPassword(email, password).then(res => {
      this.tokenService.setConnectionStatus(true);
      if (res.user?.emailVerified === true) {
        debugger
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['/varify-email']);
      }
    }).catch((err: FirebaseError) => {
      alert(err.message);  // Display error message
      return Promise.reject(err); // Reject the promise in case of an error
    });
  }

  // register method
  register(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password).then(res => {
      alert('Registration Successful');
      this.sendEmailForVarification(res.user);
      this.router.navigate(['/login']);
    }).catch((err: FirebaseError) => {
      alert(err.message);  // Using the 'err' variable here
      this.router.navigate(['/register']);
    });
  }

  // sign out
  logout() {
    this.afAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }).catch((err: FirebaseError) => {
      alert(err.message);  // Using the 'err' variable here
    });
  }

  // forgot password
  forgotPassword(email: string) {
    this.afAuth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/varify-email']);
    }).catch((err: FirebaseError) => {
      alert('Something went wrong: ' + err.message);  // Using the 'err' variable here
    });
  }

  // email verification
  sendEmailForVarification(user: any) {
    user.sendEmailVerification().then(() => {
      this.router.navigate(['/varify-email']);
    }).catch((err: FirebaseError) => {
      alert('Something went wrong. Unable to send email verification: ' + err.message);  // Using the 'err' variable here
    });
  }

  // sign in with Google
  googleSignIn() {
    this.afAuth.signInWithPopup(new GoogleAuthProvider()).then(res => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/home']);
  
    }).catch((err: FirebaseError) => {
      alert(err.message);  // Using the 'err' variable here
    });
  }
}
