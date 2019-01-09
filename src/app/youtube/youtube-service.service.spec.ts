import { TestBed } from '@angular/core/testing';

import { YoutubeServiceService } from './youtube-service.service';

describe('YoutubeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubeServiceService = TestBed.get(YoutubeServiceService);
    expect(service).toBeTruthy();
  });
});
