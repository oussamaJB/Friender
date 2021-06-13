import { Component, OnInit } from '@angular/core';
import {InteractService} from '../interact.service';


// This component display all the photos uploaded by the user
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
