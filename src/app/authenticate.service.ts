import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
import { Router } from '@angular/router';


// This service is used to manage the user's sign in and sign up operations
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient, private router: Router) {
  }
  public access = false;
  public baseURL = 'http://localhost:5000/api' ;

// sign in
  public _url = '';
  public u;

  // sign up
  public email;
  public name;
  public pwd;

  exist() {
    this.access = true;
    this.router.navigate(['/home']);
  }

  invalid() {
    alert(this.u.error);
  }

  getUser() {
    this.http.get(this._url).toPromise().then(data => {
      this.u = data;
      if (this.u.success) {
        this.exist();
      }else{
        this.invalid();
      }
    });
  }

  signup(email, name, pwd) {
    this.email = email;
    this.name = name;
    this.pwd = pwd;
    const request = this.baseURL + '/add/user?' + 'username=' + this.name + '&password='
      + this.pwd + '&email=' + this.email;
    let response;
    this.http.get(request).subscribe(data => {
      response = data;
      if (response.success) {
        alert(this.name + ' : Welcome to our network');
      }
      else {
        alert('Error : ' + response.error);
      }
    });
  }

  // getter to return the current user after signing in successfully
  getuser(): User {
    return this.u;
  }

}
