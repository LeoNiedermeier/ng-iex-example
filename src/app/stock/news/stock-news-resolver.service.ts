import {IexService} from '../../shared/iex.service';
import {StockNewsItem} from '../../shared/stock-news-item';
import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';



@Injectable()
export class StockNewsResolverService implements Resolve<Array<StockNewsItem>> {

  constructor(private iexService: IexService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<StockNewsItem>> {
    const sym = route.parent.paramMap.get('symbol');

    return this.iexService.stockNews(sym).pipe(
      // https://www.learnrxjs.io/operators/error_handling/catch.html
      catchError(error => {
        // einfaches Fehlerhandling - es wird eine leere Liste zurückgegeben.
        console.log(error);
        return of(new Array<StockNewsItem>());
      } ));

    // TODO
    // https://angular.io/guide/http#intercepting-all-requests-or-responses
    // https://stackoverflow.com/questions/46019771/catching-errors-in-angular-httpclient
  }
}
