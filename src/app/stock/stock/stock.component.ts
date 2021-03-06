import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html'
})
export class StockComponent implements OnInit {
  stockSymbol = 'xx';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // 'symbol' wird als path parameter geliefert
    this.stockSymbol = this.activatedRoute.snapshot.paramMap.get('symbol');
  }
}
