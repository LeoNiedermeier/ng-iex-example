import {StockNewsItem} from './stocknewsitem';
import {RefDataSymbol} from './refdatasymbol';
import {StockCompany} from './stockcompany';
import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class IexService {

  constructor() {}

  allRefDataSymbols() {
    const refDataSymbols = new Array<RefDataSymbol>();
    refDataSymbols.push(new RefDataSymbol('AAAP', 'Advanced Accelerator Applications S.A.', new Date('2017-11-15')));
    refDataSymbols.push(new RefDataSymbol('AABA', 'AAltaba Inc..', new Date('2017-11-15')));
    refDataSymbols.push(new RefDataSymbol('ANTX', 'Anthem Inc. Corporate Units', new Date('2017-11-15')));
    return refDataSymbols;
  }

  stockCompany(symbol: string): StockCompany {
    return null;
  }

  stockNews(symbol: string): Array<StockNewsItem> {
    const news = new Array<StockNewsItem>();
    // datetime: Date, headline: string, source: string, summary: string
    if ('AAAP' === symbol) {
      news.push(new StockNewsItem(new Date('2017-12-04T11:16:00-05:00'),
        'AAAP still has one more major product to launch this year', 'CNBC', 'AAAP AAAP, ...',
        'https://api.iextrading.com/1.0/stock/aapl/article/4616349647182560'));

      news.push(new StockNewsItem(new Date('2017-12-01T11:11:00-05:00'),
        'AAAP Super', 'CNBC', 'AAAP AAAP, ...',
        'https://api.iextrading.com/1.0/stock/aapl/article/4616349647182560'));
    }
    if ('AABA' === symbol) {
      news.push(new StockNewsItem(new Date('2017-12-04T11:16:00-05:00'),
        'AABA still has one more major product to launch this year', 'CNBC', 'AABA AABA, ...',
        'https://api.iextrading.com/1.0/stock/aapl/article/4616349647182560'));
    }
    return news;
  }
}
