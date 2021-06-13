import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenticateService} from '../authenticate.service';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(private _usersService: AuthenticateService, private router: Router) {
    const y = setTimeout(() => {this.ok = true; }, 2000);
  }
  offset = '';
  animation = 'container';
  dynamique = 'form';
  Confirmer = 'Confirmer';
  bien = '';
  forgot_pass = false;
  ok = false;

  name: string;
  pass: string;
  url: string;
  baseURL = 'http://guinea-pig.ddns.net:5000/api/authentication?username=';
  u;


  // SIGN UP
  email: string;
  username: string; // DATA ENTREE
  pwd: string;      // DATA ENTREE
  pwdd: string;     // DATA ENTREE
  not_valide = false;

  movee(){  this.animation = 'container sign-up-mode';  }
  move() {  this.animation = 'container';  }
  forgot() {this.forgot_pass = true; }
  signin() {this.forgot_pass = false; }

  modifierClasse(){
    this.dynamique = 'form loading';
    this.Confirmer = '';
    this.bien = 'Récupération en cours';

    const x = setTimeout(() => {
      this.dynamique = 'form loading ok';
      this.bien = 'Bienvenue ';
    }, 4000);
  }

  ngOnInit(): void { }

  loginData(){
    this.url = this.baseURL +
      this.name + '&password=' + this.pass;
    this._usersService._url = this.url;
    this._usersService.getUser();
  }
  Register(reg: NgForm){
    if (this.pwd !== this.pwdd){this.not_valide = true; }
    else{
      this._usersService.signup(this.email, this.username, this.pwd);
      this.not_valide = false; }

  }
}
