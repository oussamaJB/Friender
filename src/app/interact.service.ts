import { Injectable } from '@angular/core';
import {Post} from './Post';
import {User} from './User';
import {DataService} from './data.service';
import {LoaderService} from './loader.service';
import {HttpClient} from '@angular/common/http';
import {Follow} from './Follow';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InteractService {

  constructor( public loader: LoaderService) { }

  public cur_user= new User('oussama',1,'/assets/images/resources/user-avatar.jpg','/assets/images/resources/nearly1.jpg',
    '/assets/images/resources/timeline-1.jpg','b44c1804953d4f9d6a60b5fc2e8ad95ecbdc20121741a2b7d9e53dacaa149f70',
    'da76e296-eed4-443d-bbd3-cb83e1e5d7c2',true);
  public posts: Post[];
  public MyPosts: Post[];
  public FollowersData: Follow[];
  public FollowingData: Follow[];
  private postID = 100;

  public loadNewsFeed(){
    this.loader.getPosts().subscribe( input => this.posts = input ) ;
  }

  public loadTimeline(){
    this.loader.getMyPosts().subscribe( input => this.MyPosts = input ) ;
  }

  public loadFollowers(){
     this.loader.getFollowers().subscribe(input => this.FollowersData = input);
  }

  public loadFollowing(){
    this.loader.getFollowing().subscribe(input => this.FollowingData = input);
  }

  public getUsers(followArray: Follow[]){
    const map = new Map<string, string>()  ;
    for (const f of followArray){
        map.set(f.username, f.icon);
     }
    return map;
  }

  public getUsersID(followArray: Follow[]){
    const map = new Map<string, Array<any>>()  ;
    for (const f of followArray){
      map.set(f.username, [f.user_id, f.follow_id]);
    }
    return map;
  }

  public postImg(text: string, img: string){
    if (text) {
      const comm = Array();
      const date = new Date().toISOString().slice(0, 16).replace('T', ' ');
      const newPost = new Post(this.cur_user.username, this.cur_user.icon, this.postID++, text, img, date, 0, comm);
      this.MyPosts.push(newPost);
    }
  }
  public putComment(commentPost: Post){
    const date = new Date().toISOString().slice(0, 16).replace('T', ' ');
    commentPost.comments.push( [this.cur_user.username, commentPost.commentArea, date, this.cur_user.icon]);
    commentPost.commentArea = '';
  }
  public pressHeart(post: Post){
    if (post.liked) {
      post.liked = false;
      post.likesCount--;
    } else {
      post.liked = true;
      post.likesCount++;
    }
  }

}
