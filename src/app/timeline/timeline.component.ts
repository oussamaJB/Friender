import { Component, OnInit} from '@angular/core';
import {User} from '../User';
import {Post} from '../Post';
import {InteractService} from '../interact.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  users = this.data.getUsers();
  text = '';

  constructor(public interact: InteractService, public data: DataService,) {}
  ngOnInit(): void {
         this.interact.loadTimeline();
  }

}
