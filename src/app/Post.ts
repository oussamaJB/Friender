import {User} from './User';

export class Post{
  postUser: User ;
  postText: string;
  postImgURL: string;
  postDate: string ;
  likesCount: number;
  comments: any[] ;
  liked: boolean;
  commentArea: string;


  constructor(user: User, text: string, img: string, date: string, likes: number, Comments: any[]) {
    this.postUser = user;
    this.postText = text;
    this.postImgURL = img;
    this.postDate = date;
    this.likesCount = likes;
    this.comments = Comments;
    this.liked=false;
    this.commentArea = '';
  }
}
