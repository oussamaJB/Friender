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

  constructor(public data: DataService, public loader: LoaderService) { }

  likedPosts = new Set<Post>();
  curUser = this.data.curUser;
  public posts: Post[];
  public MyPosts: Post[];
  public FollowersData: Follow[];
  public FollowingData: Follow[];
  public Following: Map<string, string>;
  public Followers: Map<string, string>;
  public RequestData: Map<string, Array<any> >;
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
  public fetchUsers(){
    this.Followers = this.getUsers(this.FollowersData);
    this.Following = this.getUsers(this.FollowingData);
  }

  public postImg(text: string){
    if (text) {
      const comm = Array();
      const date = new Date().toISOString().slice(0, 16).replace('T', ' ');
      const newPost = new Post(this.curUser.userName, this.curUser.userIconURL, this.postID++, text, '', date, 0, comm);
      this.MyPosts.push(newPost);
    }
  }
  public putComment(commentPost: Post){
    const date = new Date().toISOString().slice(0, 16).replace('T', ' ');
    commentPost.comments.push( [this.curUser.userName, commentPost.commentArea, date]);
    commentPost.commentArea = '';
  }
  public pressHeart(post: Post){
    if (this.likedPosts.has(post)) {
      this.likedPosts.delete(post);
      post.liked = false;
      post.likesCount--;
    } else {
      this.likedPosts.add(post);
      post.liked = true;
      post.likesCount++;
    }
  }

}
