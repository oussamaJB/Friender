import { Component, OnInit } from '@angular/core';
import {Post} from '../Post';
import {User} from '../User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  amy = new User('Amy', '/assets/images/resources/admin.jpg');
  alexis = new User('Alexis', '/assets/images/resources/nearly1.jpg');
  sarah = new User('Sarah', '/assets/images/resources/nearly6.jpg');
  users = new Map<string, string>([
    [this.amy.userName, this.amy.userIconURL],
    [this.alexis.userName, this.alexis.userIconURL],
    [this.sarah.userName, this.sarah.userIconURL]
  ]);
  comments1 = new Map<string, string>([
     ['Sarah', 'Oh my god, you look amazing dear! Look at them beautiful blue eyes shining like diamonds!'],
     ['Alexis', 'Oh you are so cute !']
  ]);
  comments2 = new Map<string, string>([
    ['Sarah', 'Why didn\'t you take me with you in this trip?'],
    ['Amy', 'This is heaven on earth!']
  ]);
  post1 = new Post(this.amy, 'Having fun in San Francisco!', '/assets/images/resources/user-post.jpg', '2021-05-01  16:40', 2500, this.comments1);
  post2 = new Post(this.alexis, 'Having fun in New York!', '/assets/images/resources/user-post6.jpg', '2021-04-30  18:32', 2200, this.comments2);
  posts = [this.post1, this.post2];
  constructor() { }

   ngOnInit(): void {
  }

}
