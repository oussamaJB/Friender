import { Component, OnInit } from '@angular/core';
import {InteractService} from '../interact.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public interact: InteractService) { }

  ngOnInit(): void {
    this.interact.loadFollowers();
    this.interact.loadFollowing();
    this.interact.fetchUsers();
  }

}
