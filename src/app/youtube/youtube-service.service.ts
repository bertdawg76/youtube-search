import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import {Observable, BehaviorSubject, throwError} from 'rxjs';
import { VideoDetail } from './youtube-video.model';
import { SnackbarService } from './snackbar.service';

const API_KEY = 'AIzaSyBY20l3aG_3xEYLzdzCN4B0zdr1QuS9ZW4';
const API_URL = 'https://www.googleapis.com/youtube/v3/search';
//I couldn't find the channelId for the angular channel, so I used the angular air channelId.
const channelId = 'UCdCOpvRk1lsBk26ePGDPLpQ';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  nextPage$ = new BehaviorSubject<string>('');
  prevPage$ = new BehaviorSubject<string>('');
  totalResults$ = new BehaviorSubject<number>(0);
  searchTerm$ = new BehaviorSubject<string>('');
  itemsLength$ = new BehaviorSubject<number>(0);
  displayVideos$ = new BehaviorSubject<VideoDetail[]>([]);


  constructor(private http: HttpClient, private snackBar: SnackbarService) { }

  //this function builds the url with a pagination token or without, and passes it to the httpClient api call.
  getYoutubeVideos(searchTerm: string, token: string = ''):Observable<VideoDetail[]> {
      this.searchTerm$.next(searchTerm);
      let searchUrl = ``;
      if(token.length > 0 ) {
          const pageParams: string = [
              `q=${searchTerm}`,
              `key=${API_KEY}`,
              `part=snippet`,
              `channelId=${channelId}`,
              `order=date`,
              `pageToken=${token}`,
              `type=video`,
              `maxResults=10`
          ].join('&');
         searchUrl = `${API_URL}?${pageParams}`;
      } else {
          const params: string = [
              `q=${searchTerm}`,
              `key=${API_KEY}`,
              `part=snippet`,
              `channelId=${channelId}`,
              `order=date`,
              `type=video`,
              `maxResults=10`
          ].join('&');

          searchUrl = `${API_URL}?${params}`;
      }

      return this.http.get(searchUrl).pipe(map(response => {
              if(response['items'].length === 0) {
                  this.snackBar.openSnackBar('No Results Found.', 'Close', 'green-snackbar')
              }
              this.nextPage$.next(response['nextPageToken']);
              this.prevPage$.next(response['prevPageToken']);
              this.totalResults$.next(response['pageInfo'].totalResults);
              this.itemsLength$.next(response['items'].length)
          return response['items'].map(item => {
              return new VideoDetail({
                  id: item.id.videoId,
                  title: item.snippet.title,
                  description: item.snippet.description,
                  thumbnail: item.snippet.thumbnails.medium.url,
                  publishedAt: item.snippet.publishedAt,
              });
          })
      }),
      tap(videos => this.displayVideos$.next(videos)),
      catchError(err => this.handleError(err)))
  }

    //this function handles the error and displays an angular material snackbar with the error message.
    private handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        this.snackBar.openSnackBar(errorMessage, 'Close', 'red-snackbar')
        return throwError(errorMessage);
    }


}
