import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {SignComponent} from './sign/sign.component';
import {SignupComponent} from './signup/signup.component';
import {ProfileComponent} from './profile/profile.component';
import {HomeComponent} from './home/home.component';
import {TimelineComponent} from './timeline/timeline.component';
import {PhotosComponent} from './photos/photos.component';
import {AboutComponent} from './about/about.component';
import {FriendsComponent} from './friends/friends.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sign', component: SignComponent},
  { path: 'signup' , component: SignupComponent},
  { path: 'home', component: HomeComponent},
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {path: '', component: TimelineComponent},
      {path: 'timeline' , component: TimelineComponent},
      {path: 'photos' , component: PhotosComponent},
      {path: 'about', component: AboutComponent},
      {path: 'friends', component: FriendsComponent}
    ]
  },
  { path:'**' , component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
