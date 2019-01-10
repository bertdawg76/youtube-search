import { Component, OnInit, OnDestroy } from '@angular/core';
import { YoutubeService } from './youtube/youtube-service.service';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    subs: Subscription[] = [];
    videos$: Observable<any>;

    constructor(private youtubeService: YoutubeService) { }

    ngOnInit() {
        //this observable gets the returned videos and inputs them into the video list component
        this.videos$ = this.youtubeService.displayVideos$;
    }

    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe())
    }

    //this function sends search term to the service to call the youtube api.
    youtubeSearchClicked(term) {
        let sub = this.youtubeService.getYoutubeVideos(term).subscribe();
        this.subs.push(sub);
    }

    //I tried a search as you type function, it works but the youtube api doesn't seem to work well with partial matches.
    //this is how we do all searches at my current job.
    // searchTermsEntered() {
    //     let sub = this.searchTerm.valueChanges.pipe(
    //         filter((term: string) => term.length > 0),
    //         debounceTime(200),
    //         switchMap(term => this.youtubeService.getYoutubeVideos(term)),
    //     ).subscribe()
    //     this.subs.push(sub);
    // }
}
