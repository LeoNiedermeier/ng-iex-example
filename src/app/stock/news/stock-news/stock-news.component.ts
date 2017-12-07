import {IexService} from '../../../shared/iex.service';
import {StockNewsItem} from '../../../shared/stocknewsitem';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: './stock-news.component.html'
})
export class StockNewsComponent implements OnInit {

  newsItems: Array<StockNewsItem>;

  constructor(private iexService: IexService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // https://angular.io/guide/router#snapshot-the-no-observable-alternative
    const symbol = this.activatedRoute.snapshot.paramMap.get('symbol');
    this.iexService.stockNews(symbol).subscribe(r => this.newsItems = r);
  }
}
