import {Quote} from './quote';
import {QuoteInformation} from './quote-information';
import {StockNewsItem} from './stock-news-item';
import {RefDataSymbol} from './ref-data-symbol';
import {StockCompany} from './stock-company';
import {DatePipe} from '@angular/common';
import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/map';

@Injectable()
export class IexService {

  constructor(private httpClient: HttpClient) {}

  allRefDataSymbols() {
    const refDataSymbols = new Array<RefDataSymbol>();
    refDataSymbols.push(new RefDataSymbol('AAAP', 'Advanced Accelerator Applications S.A.', new Date('2017-11-15')));
    refDataSymbols.push(new RefDataSymbol('AABA', 'AAltaba Inc..', new Date('2017-11-15')));
    refDataSymbols.push(new RefDataSymbol('ANTX', 'Anthem Inc. Corporate Units', new Date('2017-11-15')));
    return refDataSymbols;
  }

  stockCompany(symbol: string): Observable<StockCompany> {
    const url = `https://api.iextrading.com/1.0/stock/${symbol}/company`;
    return this.httpClient.get<StockCompany>(url);
  }

  stockNews(symbol: string): Observable<Array<StockNewsItem>> {
    const url = `https://api.iextrading.com/1.0/stock/${symbol}/news/last/5`;
    return this.httpClient.get<Array<StockNewsItem>>(url);
  }

  quoteInformation(symbol: string): Observable<QuoteInformation> {
    const openClose = this.httpClient.get(`https://api.iextrading.com/1.0/stock/${symbol}/open-close`);
    const price = this.httpClient.get(`https://api.iextrading.com/1.0/stock/${symbol}/price`, {responseType: 'text'});

    return Observable.zip(openClose, price).map(d => {
      const oc = d[0];
      const open = new Quote(oc['open']['time'], oc['open']['price']);
      const close = new Quote(oc['close']['time'], oc['close']['price']);
      const p = Number.parseFloat(d[1]);
      const current = new Quote(null, p);
      const qi = new QuoteInformation(current, open, close);
      return qi;
    });
  }
}
