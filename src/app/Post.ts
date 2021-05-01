import {User} from './User' ;

class Post{
  postUser: User ;
  postText: string;
  postImgURL: string;
  likesCount: number;
  Comments: Map;

  constructor(user: User, text: string, img: string, likes: number, Comments: Map) {
    this.postUser = user;
    this.postText = text;
    this.postImgURL = img;
    this.likesCount = likes;
    this.Comments = Comments;
  }
}
