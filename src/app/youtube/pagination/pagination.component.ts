import {Component, OnInit, OnDestroy} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { YoutubeService } from "../youtube-service.service";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnDestroy {
  pageSize = 10;

  nextPage$: string;
  prevPage$: string;
  searchTerm$: string;
  totalResults$: Observable<number>;
  itemsLength$: Observable<number>;
  subs: Subscription[] = [];

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
      this.nextPage();
      this.prevPage();
      this.searchTerm();
      this.totalResults$ = this.youtubeService.totalResults$;
      this.itemsLength$ = this.youtubeService.itemsLength$;
  }

  ngOnDestroy() {
      this.subs.forEach(sub => sub.unsubscribe());
  }

  //I chose to make this a smart component, because of the complexity, it interacts directly with the service for pagination.


  // the nextPage, prevPage and searchTerm functions subscribe to behavior subjects in the service.
  nextPage() {
      let sub = this.youtubeService.nextPage$.subscribe(val => {
          this.nextPage$ = val;
      });
      this.subs.push(sub);
  }

  prevPage() {
      let sub = this.youtubeService.prevPage$.subscribe(val => {
          this.prevPage$ = val;
      });
      this.subs.push(sub);
  }

  searchTerm() {
      let sub = this.youtubeService.searchTerm$.subscribe(val => {
          this.searchTerm$ = val;
      });
      this.subs.push(sub)
  }

  //this function sends the youtube api pagination token for next page or previous page.
  pageEvent(event){
      if(event.pageIndex > event.previousPageIndex) {
          this.callYoutubeApi(this.searchTerm$, this.nextPage$);
      } else {
          this.callYoutubeApi(this.searchTerm$, this.prevPage$);
      }
    }

  callYoutubeApi(searchTerm, page) {
      let sub = this.youtubeService.getYoutubeVideos(searchTerm, page).subscribe();
      this.subs.push(sub);
  }
}
