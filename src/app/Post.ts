
export class Post{
  userName: string;
  userIconURL: string;
  postID: number;
  postText: string;
  postImgURL: string;
  postDate: string ;
  likesCount: number;
  comments: any[] ;
  liked: boolean;
  commentArea: string;


  constructor(username: string, userIcon: string, postID: number, text: string, img: string, date: string, likes: number, Comments: any[]) {
    this.userName = username;
    this.userIconURL = userIcon;
    this.postID=postID;
    this.postText = text;
    this.postImgURL = img;
    this.postDate = date;
    this.likesCount = likes;
    this.comments = Comments;
    this.liked=false;
    this.commentArea = '';
  }
}
