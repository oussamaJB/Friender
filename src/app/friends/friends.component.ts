import { Component, OnInit } from '@angular/core';
import {InteractService} from '../interact.service';
import {LoaderService} from '../loader.service';
import {Follow} from '../Follow';


// This component displays a list of the users who are following or followed by the current user
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(public interact: InteractService, public load: LoaderService) { }

  // get the ID of a user
  public getID(username: string, followArray: Follow[]){
     for (const f of followArray){
       if(f.username === username){
          return(f.user_id);
       }
     }
  }

  // check whether a user is followed by you
  isFollowed(follower: Follow, Following: Follow[]){
    return(Following.filter(x => x.username === follower.username)[0] );
  }
  // delete a user from the list of followed users
  deleteElement(username: string, FollowingData: Follow[] ){
    this.interact.FollowingData.splice(this.interact.FollowingData.findIndex(x => x.username==username),1);
  }

  ngOnInit(): void { }

}
