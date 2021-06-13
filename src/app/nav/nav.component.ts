import { Component, OnInit } from '@angular/core';
import {InteractService} from '../interact.service';

// This component is the navigation bar
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public interact: InteractService ) { }

  ngOnInit(): void { }

}
