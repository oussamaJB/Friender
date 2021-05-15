export class User {
  username: string;
  id: number;
  profile_picture: string;
  icon: string;
  cover: string;
  secret_hash: string;
  secret_user: string;
  success:boolean;

  constructor(name: string, id: number, profile_picture: string, icon: string, cover: string,
              hash: string, hash2: string, success: boolean ) {
    this.username = name;
    this.id = id;
    this.profile_picture = profile_picture;
    this.icon = icon;
    this.cover = cover;
    this.secret_hash = hash;
    this.secret_user = hash2;
    this.success = success;
  }
}
