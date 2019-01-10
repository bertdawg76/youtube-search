import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { MaterialModule } from "../material.module";
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';
import { HttpParams } from '@angular/common/http';

import { YoutubeService } from './youtube-service.service';
import { VideoDetail } from './youtube-video.model';

describe('YoutubeService', () => {
  let injector: TestBed;
  let service: YoutubeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [YoutubeService]
      });
      injector = getTestBed();
      service = injector.get(YoutubeService);
      httpMock = injector.get(HttpTestingController)
  });

    it(
        'should be created',
        inject([YoutubeService], (service: YoutubeService) => {
            expect(service).toBeTruthy()
        })
    )
});
