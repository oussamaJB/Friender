import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {DataService} from '../data.service';
import {InteractService} from '../interact.service';
import {LoaderService} from '../loader.service';
import {Follow} from '../Follow';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(public interact: InteractService, public load: LoaderService) { }

  public getID(username: string, followArray: Follow[]){
     for (const f of followArray){
       if(f.username === username){
          return(f.user_id);
       }
     }
  }
  isFollowed(follower: Follow, Following: Follow[]){
    return(Following.filter(x => x.username === follower.username)[0] );
  }
  deleteElement(username: string, FollowingData: Follow[] ){
    this.interact.FollowingData.splice(this.interact.FollowingData.findIndex(x => x.username==username),1);
  }

  ngOnInit(): void { }

}
