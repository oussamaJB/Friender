import { Injectable } from '@angular/core';
import {User} from './User';
import {Post} from './Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  amy = new User('Amy', '/assets/images/resources/admin.jpg');
  alexis = new User('Alexis', '/assets/images/resources/nearly1.jpg');
  sarah = new User('Sarah', '/assets/images/resources/nearly6.jpg');
  users = new Map<string, string>([
    [this.amy.userName, this.amy.userIconURL],
    [this.alexis.userName, this.alexis.userIconURL],
    [this.sarah.userName, this.sarah.userIconURL]
  ]);
  comments1 = [
    ['Sarah', 'Oh my god, you look amazing dear! Look at them beautiful blue eyes shining like diamonds!',
      '2021-05-01 17:35'],
    ['Alexis', 'Oh you are so cute !', '2021-05-01 18:32']
  ];
  comments2 = [
    ['Sarah', 'Why didn\'t you take me with you in this trip?', '2021-04-30 19:34'],
    ['Alexis', 'This is heaven on earth!', '2021-04-30 19:44']
  ];
  post1 = new Post(this.amy, 'Having fun in San Francisco!', '/assets/images/resources/user-post.jpg',
    '2021-05-01  16:40', 2500, this.comments1);
  post2 = new Post(this.amy, 'Having fun in New York!', '/assets/images/resources/user-post6.jpg',
    '2021-04-30  18:32', 2200, this.comments2);
  public posts = new Array(this.post1, this.post2);
  public curUser = new User('Amy', '/assets/images/resources/admin.jpg' );

  constructor() { }

  getPosts(){
    return this.posts;
  }
  getUser(){
    return this.curUser;
  }
  getUsers(){
    return this.users;
  }
}
