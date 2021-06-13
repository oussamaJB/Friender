import { Injectable } from '@angular/core';
import {Post} from './Post';
import {LoaderService} from './loader.service';
import {Follow} from './Follow';
import {AuthenticateService} from './authenticate.service';


// This service will manage the user's interactions with the UI.
// It will use the loader service to save these interactions in the server side.
@Injectable({
  providedIn: 'root'
})
export class InteractService {

  constructor( public loader: LoaderService, public  auth: AuthenticateService) { }

  // keeping track of the current user
  public cur_user = this.auth.getuser();

  // Data to be loaded from the server
  public posts: Post[];
  public MyPosts: Post[];
  public FollowersData: Follow[];
  public FollowingData: Follow[];

  // Methods to load the user's data into the web page
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

  // getters to request other users' data
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

  // Adding new content or interacting with existing content
  public postImg(text: string, img: File){
      const comm = Array();
      const date = new Date().toISOString().slice(0, 16).replace('T', ' ');
      let postID;
      let postImgURL;
      this.loader.addPost(text,img).then(data  =>  {
        postID = data.postID;
        postImgURL = data.postImgURL;
      }).then(
        () => {
          const newPost = new Post(this.cur_user.username, this.cur_user.icon, postID, text, postImgURL + img, date, 0, comm);
          this.MyPosts.push(newPost);
          console.log(newPost);
        }).catch(error => alert((error)));
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

