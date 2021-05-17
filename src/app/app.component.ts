import { Component } from '@angular/core';
import {AuthenticateService} from './authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SocialNetwork';
  constructor(public auth: AuthenticateService) {
  }
}
