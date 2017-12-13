import { TestBed, inject } from '@angular/core/testing';

import { StockNewsResolverService } from './stock-news-resolver.service';

describe('StockNewsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockNewsResolverService]
    });
  });

  it('should be created', inject([StockNewsResolverService], (service: StockNewsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
