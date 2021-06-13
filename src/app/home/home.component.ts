import { Component, OnInit } from '@angular/core';
import {InteractService} from '../interact.service';
import {LoaderService} from '../loader.service';


// This is the News feed: the page where the user sees posts of the people he is following
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text = '';

  constructor(public interact: InteractService, public load: LoaderService) {}
  ngOnInit(): void {
        this.interact.loadNewsFeed();
   }

}
