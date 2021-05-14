export class Follow{
  public follow_id: number;
  public icon: string;
  public user_id: number;
  public username: string;
  constructor( follow_id: number, icon: string, user_id: number, username: string) {
     this.follow_id = follow_id;
     this.icon = icon;
     this.user_id = user_id;
     this.username = username;
  }
}
