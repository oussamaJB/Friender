import { Component, OnInit } from '@angular/core';
import {Post} from '../Post';
import {User} from '../User';
import {InteractService} from '../interact.service';
import {DataService} from '../data.service';
import {LoaderService} from '../loader.service';

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
