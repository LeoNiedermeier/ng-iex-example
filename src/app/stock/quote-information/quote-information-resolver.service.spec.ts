import { TestBed, inject } from '@angular/core/testing';

import { QuoteInformationResolverService } from './quote-information-resolver.service';

describe('QuoteInformationResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteInformationResolverService]
    });
  });

  it('should be created', inject([QuoteInformationResolverService], (service: QuoteInformationResolverService) => {
    expect(service).toBeTruthy();
  }));
});
