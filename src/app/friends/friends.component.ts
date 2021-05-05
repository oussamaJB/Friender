import { Component, OnInit } from '@angular/core';
import {User} from '../User';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  followers = new Map<string, string>([
    ['Amy', '/assets/images/resources/nearly1.jpg'],
    ['Tracy', '/assets/images/resources/nearly3.jpg'],
    ['Katy', '/assets/images/resources/nearly2.jpg'],
    ['Susy', '/assets/images/resources/nearly4.jpg'],
    ['Ryan', '/assets/images/resources/nearly5.jpg']
  ]);

  following = new Map<string, string>([
    ['Amy', '/assets/images/resources/nearly1.jpg'],
    ['Tracy', '/assets/images/resources/nearly3.jpg'],
    ['Katy', '/assets/images/resources/nearly2.jpg'],
    ['Susy', '/assets/images/resources/nearly4.jpg']
  ]);

  constructor() { }

  ngOnInit(): void {
  }

}
