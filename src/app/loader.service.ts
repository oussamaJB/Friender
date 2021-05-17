import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { observable} from 'rxjs';
import {Post} from './Post';
import {Follow} from 'src/app/Follow';
import {User} from './User';
import {AuthenticateService} from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  /*public cur_user= new User('python',1,'','/assets/images/resources/nearly1.jpg',
    '/assets/images/resources/timeline-1.jpg','05c035833be448fca5a2c4174e7b6ae85424bb2192acf8c50e6f8a25b1c74915',
    '8b88a6a0-eceb-431d-8cbe-3c7ad82c1f17',true);*/
  public cur_user = this.auth.getuser();
  private baseURL = 'http://guinea-pig.ddns.net:5000/api';
  private newsFeedURL = this.baseURL+'/get/home?'+'&secret_hash='+this.cur_user.secret_hash+'&secret_user='+this.cur_user.secret_user;
  private timelineURL = this.baseURL+'/get/profile?'+'&secret_hash='+this.cur_user.secret_hash+'&secret_user='+this.cur_user.secret_user;
  private  followersURL = this.baseURL+'/get/followers?'+'user_id='+this.cur_user.id+'&secret_hash='+this.cur_user.secret_hash+'&secret_user='+this.cur_user.secret_user;
  private  followingURL = this.baseURL+'/get/following?'+'user_id='+this.cur_user.id+'&secret_hash='+this.cur_user.secret_hash+'&secret_user='+this.cur_user.secret_user;
  /*private newsFeedURL = '/assets/test.json';
  private timelineURL = '/assets/test2.json';
  private  followersURL = '/assets/followed.json' ;
  private  followingURL = '/assets/following.json';*/
  constructor(private http: HttpClient, public auth: AuthenticateService) { }
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
       '/add/like?post_id='+postID+'&secret_hash='+this.cur_user.secret_hash+'&secret_user='+this.cur_user.secret_user;
     this.http.get(likeURL).subscribe();
     console.log('liked!');
  }
  public removeLike( postID: number ){
    const likeURL= this.baseURL+
      '/remove/like?post_id='+postID+'&secret_hash='+this.cur_user.secret_hash+'&secret_user='+this.cur_user.secret_user;;
    this.http.get(likeURL).subscribe();
    console.log('unliked!');
  }
  public addComment(post: Post){
      const commentURL= this.baseURL+
        '/add/comment?content='+post.commentArea+'&post_id='+post.postID+'&secret_hash='+this.cur_user.secret_hash+'&secret_user='+this.cur_user.secret_user;
      this.http.get(commentURL).subscribe();
      console.log('commented!');
  }
  public addPost(text: string,img: File){
    const postURL = this.baseURL+'/add/post';
    const Form = new FormData();
    Form.append('picture', img, img.name);
    Form.append('text', text);
    Form.append('secret_hash',this.cur_user.secret_hash);
    Form.append('secret_user',this.cur_user.secret_user);
    console.log(Form);
    return this.http.post<Post>(postURL, Form);
  }
  public addFollow(userID: number){
    const followURL= this.baseURL+
      '/add/follow?followed_id='+userID+'&secret_hash='+this.cur_user.secret_hash+'&secret_user='+this.cur_user.secret_user;
    this.http.get(followURL).subscribe();
    console.log('followed!');
  }
  public removeFollow(userID: number){
    const followURL= this.baseURL+
      '/remove/follow?followed_id='+userID+'&secret_hash='+this.cur_user.secret_hash+'&secret_user='+this.cur_user.secret_user;
    this.http.get(followURL).subscribe();
    console.log('unfollowed!');
  }
  public changePP(img: File){
    if(img) {
      const PPurl = this.baseURL + '/change/profile_picture';
      const Form = new FormData();
      Form.append('profile_picture',img,img.name);
      Form.append('secret_hash',this.cur_user.secret_hash);
      Form.append('secret_user',this.cur_user.secret_user);
      return this.http.post(PPurl, Form);
    }
  }
  public changeC(img: File){
    if(img) {
      const Curl = this.baseURL + '/change/cover';
      const Form = new FormData();
      Form.append('cover',img,img.name);
      Form.append('secret_hash',this.cur_user.secret_hash);
      Form.append('secret_user',this.cur_user.secret_user);
      return this.http.post<Post>(Curl, Form);
    }
  }
}
