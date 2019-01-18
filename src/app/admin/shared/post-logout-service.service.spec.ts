/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostLogoutServiceService } from './post-logout-service.service';

describe('Service: PostLogoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostLogoutServiceService]
    });
  });

  it('should ...', inject([PostLogoutServiceService], (service: PostLogoutServiceService) => {
    expect(service).toBeTruthy();
  }));
});
