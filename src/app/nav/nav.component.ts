import { Component, OnInit } from '@angular/core';
import {LoaderService} from '../loader.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public load: LoaderService ) { }

  ngOnInit(): void { }

}
