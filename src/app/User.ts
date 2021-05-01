export class User {
  userName: string;
  userIconURL: string;

  constructor(name: string, icon: string) {
    this.userName = name;
    this.userIconURL = icon;
  }
}
