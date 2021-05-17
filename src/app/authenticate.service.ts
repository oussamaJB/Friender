import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  public access = false;

// sign in
  exist() {
    this.access = true;
    this.router.navigate(['/home']);
  }

  invalid() {
    alert(this.u.error);
  }

  // signup
  public email;
  public name;
  public pwd;

  signup(email, name, pwd) {
    this.email = email;
    this.name = name;
    this.pwd = pwd;

    this.http.get(
      "http://guinea-pig.ddns.net:5000/api/add/user?" +
      "username=" + this.name + "&password=" + this.pwd + "&email=" + this.email).subscribe();
    alert(this.name + " : Your are registred");
  }

  getuser(): User {
    return this.u;
  }//pour oussema

  public _url = '';
  public u;

  constructor(private http: HttpClient, private router: Router) {
  }

  getUser() {
    this.http.get(this._url).toPromise().then(data => {
      this.u = data;
      if (this.u.success) {
        this.exist();
      } else this.invalid();

    })
   }
}
