import { Quote } from './quote';
import { QuoteInformation } from './quote-information';
import { StockNewsItem } from './stock-news-item';
import { RefDataSymbol } from './ref-data-symbol';
import { StockCompany } from './stock-company';
import { DatePipe } from '@angular/common';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { interval, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestDecorator, MyParam } from './RequestDecorator';

@Injectable()
export class IexService {
  private readonly baseUrl = 'https://api.iextrading.com/1.0';
  constructor(private httpClient: HttpClient) {}

  allRefDataSymbols() {
    const refDataSymbols = new Array<RefDataSymbol>();
    // fixe anzahl, dann geht es schneller
    refDataSymbols.push(new RefDataSymbol('AAAP', 'Advanced Accelerator Applications S.A.', new Date('2017-11-15')));
    refDataSymbols.push(new RefDataSymbol('AABA', 'AAltaba Inc..', new Date('2017-11-15')));
    refDataSymbols.push(new RefDataSymbol('ANTX', 'Anthem Inc. Corporate Units', new Date('2017-11-15')));
    refDataSymbols.push(new RefDataSymbol('AAPL', 'Apple Inc.', new Date('2019-01-14')));
    return refDataSymbols;
  }

  stockCompany(symbol: string): Observable<StockCompany> {
    const url = `${this.baseUrl}/stock/${symbol}/company`;
    return this.httpClient.get<StockCompany>(url);
  }

  stockNews(symbol: string): Observable<Array<StockNewsItem>> {
    const url = `${this.baseUrl}/stock/${symbol}/news/last/5`;
    return this.httpClient.get<Array<StockNewsItem>>(url);
  }

  quoteInformation(symbol: string): Observable<QuoteInformation> {
    // hier werden zwei Aufrufe zusammengefasst.
    const openClose = this.httpClient.get(`${this.baseUrl}/stock/${symbol}/open-close`);
    const price = this.httpClient.get(`${this.baseUrl}/stock/${symbol}/price`, { responseType: 'text' });

    return zip(openClose, price).pipe(
      map(d => {
        const oc = d[0];
        const open = new Quote(oc['open']['time'], oc['open']['price']);
        const close = new Quote(oc['close']['time'], oc['close']['price']);
        const p = Number.parseFloat(d[1]);
        const current = new Quote(null, p);
        return new QuoteInformation(current, open, close);
      })
    );
  }
}
