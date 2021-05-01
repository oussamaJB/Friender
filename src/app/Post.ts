import {User} from './User';
import { DatePipe } from '@angular/common';

export class Post{
  postUser: User ;
  postText: string;
  postImgURL: string;
  postDate: string ;
  likesCount: number;
  comments: Map<string, string>;

  constructor(user: User, text: string, img: string, date: string, likes: number, Comments: Map<string, string>) {
    this.postUser = user;
    this.postText = text;
    this.postImgURL = img;
    this.postDate = date;
    this.likesCount = likes;
    this.comments = Comments;
  }
}
