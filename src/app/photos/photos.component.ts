import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {Post} from '../Post';
import {DataService} from '../data.service';
import {InteractService} from '../interact.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  postsWithPhotos = this.interact.MyPosts.filter( post => !(post.postImgURL === ''));

  constructor(public interact: InteractService) { }

  ngOnInit(): void {
  }

}
