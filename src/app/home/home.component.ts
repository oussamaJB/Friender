import { Component, OnInit } from '@angular/core';
import {Post} from '../Post';
import {User} from '../User';
import {InteractService} from '../interact.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users = this.data.getUsers();
  text = '';

   constructor(public interact: InteractService, public data: DataService) {}
   ngOnInit(): void {}

}
