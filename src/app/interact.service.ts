import { Injectable } from '@angular/core';
import {Post} from './Post';
import {User} from './User';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class InteractService {

  constructor(public data: DataService) { }

  likedPosts = new Set<Post>();
  posts = this.data.getPosts();
  curUser = this.data.curUser;

  public postImg(text: string){
    if (text) {
      const comm = Array();
      const date = new Date().toISOString().slice(0, 16).replace('T', ' ');
      const newPost = new Post(this.curUser, text, '', date, 0, comm);
      this.posts.push(newPost);
      text = '';
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
