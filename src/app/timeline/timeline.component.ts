import { Component, OnInit} from '@angular/core';
import {InteractService} from '../interact.service';
import {LoaderService} from '../loader.service';


// This component displays the user's personal posts
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  text = '';
  img: File = null;
  setImg(img : File){
    this.img = img;
    console.log(this.img);
  }

  constructor(public interact: InteractService, public load: LoaderService ) {}
  ngOnInit(): void {
         this.interact.loadTimeline();
  }

}
