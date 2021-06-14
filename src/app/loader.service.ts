import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Post} from './Post';
import {Follow} from 'src/app/Follow';
import {AuthenticateService} from './authenticate.service';


// This service will be used to communicate with the back-end
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  // Keeping track of the current user
  public cur_user = this.auth.getuser();

  // Generating the URLs based on the user's info
  private baseURL = 'http://guinea-pig.ddns.net/api';
  private newsFeedURL = this.baseURL+'/get/home?'+'&secret_hash='+this.cur_user.secret_hash+'&secret_user='+this.cur_user.secret_user;
  private timelineURL = this.baseURL+'/get/profile?'+'&secret_hash='+this.cur_user.secret_hash+'&secret_user='+this.cur_user.secret_user;
  private  followersURL = this.baseURL+'/get/followers?'+'user_id='+this.cur_user.id+'&secret_hash='+this.cur_user.secret_hash+'&secret_user='+this.cur_user.secret_user;
  private  followingURL = this.baseURL+'/get/following?'+'user_id='+this.cur_user.id+'&secret_hash='+this.cur_user.secret_hash+'&secret_user='+this.cur_user.secret_user;

  constructor(private http: HttpClient, public auth: AuthenticateService) { }

  // getters to request Data from the server
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


  // adding or removing a like
  public addLike( postID: number ){
     const likeURL= this.baseURL+
       '/add/like?post_id='+postID+'&secret_hash='+this.cur_user.secret_hash+'&secret_user='+this.cur_user.secret_user;
     this.http.get(likeURL).subscribe();
  }
  public removeLike( postID: number ){
    const likeURL= this.baseURL+
      '/remove/like?post_id='+postID+'&secret_hash='+this.cur_user.secret_hash+'&secret_user='+this.cur_user.secret_user;
    this.http.get(likeURL).subscribe();
  }


  // adding new content
  public addComment(post: Post){
      const commentURL = this.baseURL+ '/add/comment?content='+post.commentArea+'&post_id='+post.postID
        +'&secret_hash='+this.cur_user.secret_hash+'&secret_user='+this.cur_user.secret_user;
      this.http.get(commentURL).subscribe();
  }
  public addPost(text: string,img: File){
    const postURL = this.baseURL+'/add/post';
    const Form = new FormData();
    Form.append('picture', img, img.name);
    Form.append('text', text);
    Form.append('secret_hash',this.cur_user.secret_hash);
    Form.append('secret_user',this.cur_user.secret_user);
    return this.http.post<Post>(postURL, Form).toPromise();
  }


  // following or unfollowing a user
  public addFollow(userID: number){
    const followURL= this.baseURL+ '/add/follow?followed_id='+userID+'&secret_hash='+this.cur_user.secret_hash
      +'&secret_user='+this.cur_user.secret_user;
    this.http.get(followURL).subscribe();
  }
  public removeFollow(userID: number){
    const followURL= this.baseURL+ '/remove/follow?followed_id='+userID
      +'&secret_hash='+this.cur_user.secret_hash+'&secret_user='+this.cur_user.secret_user;
    this.http.get(followURL).subscribe();
  }


  // updating user's personal info
  public changePP(img: File){
    if(img) {
      const PPurl = this.baseURL + '/change/profile_picture';
      const Form = new FormData();
      Form.append('profile_picture',img,img.name);
      Form.append('secret_hash',this.cur_user.secret_hash);
      Form.append('secret_user',this.cur_user.secret_user);
      return this.http.post<Post>(PPurl, Form).toPromise();
    }
  }
  public changeC(img: File){
    if(img) {
      const Curl = this.baseURL + '/change/cover';
      const Form = new FormData();
      Form.append('cover',img,img.name);
      Form.append('secret_hash',this.cur_user.secret_hash);
      Form.append('secret_user',this.cur_user.secret_user);
      return this.http.post<Post>(Curl, Form).toPromise();
    }
  }

}
