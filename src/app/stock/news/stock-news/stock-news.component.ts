import {IexService} from '../../../shared/iex.service';
import {StockNewsItem} from '../../../shared/stock-news-item';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: './stock-news.component.html'
})
export class StockNewsComponent implements OnInit {

  newsItems: Array<StockNewsItem>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: {stockNews: Array<StockNewsItem>}) => this.newsItems = data.stockNews);
  }
}
