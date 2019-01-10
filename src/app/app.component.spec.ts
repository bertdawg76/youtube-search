import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from "./material.module";
import { VideoListComponent } from './youtube/video-list/video-list.component';
import { YoutubeService } from "./youtube/youtube-service.service";
import { SnackbarService } from "./youtube/snackbar.service";
import { SearchInputComponent } from './youtube/search-input/search-input.component';
import { PaginationComponent } from './youtube/pagination/pagination.component';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
          MaterialModule,
          NoopAnimationsModule,
          ReactiveFormsModule,
          FormsModule
      ],
        providers: [{ provide: YoutubeService}, {provide: SnackbarService}],
      declarations: [
        AppComponent,
        VideoListComponent,
        SearchInputComponent,
        PaginationComponent,
      ],
    }).compileComponents();
  }));

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

    it('should render title in a span tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent)
        fixture.detectChanges()
        const compiled = fixture.debugElement.nativeElement
        expect(compiled.querySelector('span').textContent).toContain('Angular Youtube Search')
    }))


});
