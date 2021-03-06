import { Component, OnInit } from '@angular/core';
import {InteractService} from '../interact.service';
import {LoaderService} from '../loader.service';

// This component presents the personal profile of the user
// This Component has 3 children : Timeline, Photos or Friends
// It displays one of the three children based on the current route
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public interact: InteractService, public  loader: LoaderService) { }
  newPP = null;
  newC = null;

  // setters to manage the files to upload
  setPP(img: File){
     this.newPP = img;
  }
  setC(img: File){
     this.newC = img;
  }
  // change cover picture
  public changeC(img: File){
    let url = '';
    this.loader.changeC(img).then(data => {
      url = data.cover;
    }).then(
      () => {
      this.interact.cur_user.cover = url;
    });
  }
  // change profile picture
  public changePP(img: File){
    let url = '';
    let url2 = '';
    this.loader.changePP(img).then(data => {
      url = data.profile_picture;
      url2 = data.icon;
    }).then(
      () => {
      this.interact.cur_user.profile_picture = url;
      this.interact.cur_user.icon = url2;
    });
  }
  ngOnInit(): void {
    this.interact.loadFollowers();
    this.interact.loadFollowing();
  }

}
