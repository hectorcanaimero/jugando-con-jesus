import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor(
    private router: Router,
    private auth: AngularFireAuth
  ) {
  }

  get isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return (user !== null) ? true : false;
  }

  signIn = async (email: string, password: string) => await this.auth.signInWithEmailAndPassword(email, password);
  signUp = (email: string, password: string) => this.auth.createUserWithEmailAndPassword(email, password);
  signOut = () => this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign', 'sign-in']);
    })

  forgotPassword = (email: string) => this.auth.sendPasswordResetEmail(email);
}
