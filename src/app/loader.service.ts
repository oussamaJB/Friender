import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { observable} from 'rxjs';
import {Post} from './Post';
import {Follow} from 'src/app/Follow';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private newsFeedURL = '/assets/test.json';
  private timelineURL = '/assets/test2.json';
  private  followersURL = '/assets/followed.json' ;
  private  followingURL = '/assets/following.json';
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
}
