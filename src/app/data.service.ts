import { Injectable } from '@angular/core';
import {User} from './User';
import {Post} from './Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Fake data used to test the components

  users = new Map<string, string>([
    ['Amy', '/assets/images/resources/admin.jpg'],
    ['Alexis', '/assets/images/resources/nearly1.jpg'],
    ['Sarah', '/assets/images/resources/nearly6.jpg']
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

  post1 = new Post('Amy', '/assets/images/resources/admin.jpg', 1, 'Having fun in San Francisco!', '/assets/images/resources/user-post.jpg',
    '2021-05-01  16:40', 2500, this.comments1);
  post2 = new Post('Amy', '/assets/images/resources/admin.jpg', 2, 'Having fun in New York!', '/assets/images/resources/user-post6.jpg',
    '2021-04-30  18:32', 2200, this.comments2);
  public posts = new Array(this.post1, this.post2);

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

  public curUser = new User('Amy', '/assets/images/resources/admin.jpg' );

  // End of fake data

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
  getFollowers(){
    return this.followers;
  }
  getFollowing(){
    return this.following;
  }
}
