import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { observable} from 'rxjs';
import {Post} from './Post';
import {Follow} from 'src/app/Follow';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public cur_user= new User('python',1,'/assets/images/resources/user-avatar.jpg','/assets/images/resources/nearly1.jpg',
    '/assets/images/resources/timeline-1.jpg','b44c1804953d4f9d6a60b5fc2e8ad95ecbdc20121741a2b7d9e53dacaa149f70',
    'da76e296-eed4-443d-bbd3-cb83e1e5d7c2',true);
  private newsFeedURL = '/assets/test.json';
  private timelineURL = '/assets/test2.json';
  private  followersURL = '/assets/followed.json' ;
  private  followingURL = '/assets/following.json';
  private baseURL = 'http://127.0.0.1:5000/api'
  constructor(private http: HttpClient) { }
  public getPosts(){
     return this.http.get<Post[]>(this.newsFeedURL);
  }
  public getMyPosts(){
    return this.http.get<Post[]>(this.timelineURL);
  }
  public getFollowers(){
    return this.http.get<Follow[]>(this.followersURL);
  }
  public getFollowing(){
    return this.http.get<Follow[]>(this.followingURL);
  }
  public addLike( postID: number ){
     const likeURL= this.baseURL+
       '/add/like?post_id=${postID}&secret_hash=${this.cur_user.secret_hash}&secret_user=${this.cur_user.secret_user}';
     this.http.get(likeURL);
     console.log('liked!');
  }
  public removeLike( postID: number ){
    const likeURL= this.baseURL+
      '/remove/like?post_id=${postID}&secret_hash=${this.cur_user.secret_hash}&secret_user=${this.cur_user.secret_user}';
    this.http.get(likeURL);
    console.log('unliked!');
  }
  public addComment(post: Post){
      const commentURL= this.baseURL+
        '/add/comment?text=${post.commentArea}&post_id={post.postID}&secret_hash=${this.cur_user.secret_hash}&secret_user=${this.cur_user.secret_user}';
      this.http.get(commentURL);
      console.log('commented!');
  }
  public addPost(text: string){
    const postURL= this.baseURL+
      '/add/post?text=${text}&secret_hash=${this.cur_user.secret_hash}&secret_user=${this.cur_user.secret_user}';
    this.http.get(postURL);
    console.log('posted!');
  }
  public addFollow(userID: number){
    const followURL= this.baseURL+
      '/add/follow?user_id=${userID}&secret_hash=${this.cur_user.secret_hash}&secret_user=${this.cur_user.secret_user}';
    console.log('followed!');
  }
  public removeFollow(userID: number){
    const followURL= this.baseURL+
      '/remove/follow?user_id=${userID}&secret_hash=${this.cur_user.secret_hash}&secret_user=${this.cur_user.secret_user}';
    console.log('unfollowed!');
  }
}
