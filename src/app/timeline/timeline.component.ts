import { Component, OnInit} from '@angular/core';
import {User} from '../User';
import {Post} from '../Post';
import {InteractService} from '../interact.service';
import {DataService} from '../data.service';
import {LoaderService} from '../loader.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  text = '';
  URL = '';
  setURL(url : string){
     this.URL = '/assets/images/resources/'+url;
     console.log(this.URL);
  }

  constructor(public interact: InteractService, public load: LoaderService ) {}
  ngOnInit(): void {
         this.interact.loadTimeline();
  }

}
