import {IexService} from '../../shared/iex.service';
import {QuoteInformation} from '../../shared/quote-information';
import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class QuoteInformationResolverService implements Resolve<QuoteInformation> {

  constructor(private iexService: IexService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<QuoteInformation> {
    const sym = route.parent.paramMap.get('symbol');
    return this.iexService.quoteInformation(sym);
  }
}
