import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { VideoListComponent } from './youtube/video-list/video-list.component';
import { YoutubeService } from "./youtube/youtube-service.service";
import { SnackbarService } from "./youtube/snackbar.service";
import { SearchInputComponent } from './youtube/search-input/search-input.component';
import { PaginationComponent } from './youtube/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    SearchInputComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [
      YoutubeService,
      SnackbarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
