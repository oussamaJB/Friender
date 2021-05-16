import { Component, OnInit } from '@angular/core';
import {InteractService} from '../interact.service';
import {LoaderService} from '../loader.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public interact: InteractService, public  loader: LoaderService) { }
  PP_URL = '';
  C_URL = '';
  setPP(url: string){
     this.PP_URL = url;
  }
  setC(url: string){
     this.C_URL = url;
  }

  ngOnInit(): void {
    this.interact.loadFollowers();
    this.interact.loadFollowing();
  }

}
