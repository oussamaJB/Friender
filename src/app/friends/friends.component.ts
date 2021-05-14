import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {DataService} from '../data.service';
import {InteractService} from '../interact.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(public  data: DataService, public interact: InteractService) { }

  ngOnInit(): void {
    this.interact.loadFollowers();
    this.interact.loadFollowing();
    this.interact.fetchUsers();
  }

}
