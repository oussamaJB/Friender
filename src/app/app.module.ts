import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignComponent } from './sign/sign.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FriendsComponent } from './friends/friends.component';
import { PhotosComponent } from './photos/photos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    NavComponent,
    ProfileComponent,
    HomeComponent,
    TimelineComponent,
    FriendsComponent,
    PhotosComponent,
    PageNotFoundComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
