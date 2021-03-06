import {IexService} from '../../../shared/iex.service';
import {StockCompany} from '../../../shared/stock-company';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './stock-company.component.html'
})
export class StockCompanyComponent implements OnInit {

  stockCompany: StockCompany;

  constructor(private iexService: IexService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // https://angular.io/guide/router#snapshot-the-no-observable-alternative
    const symbol = this.activatedRoute.snapshot.parent.paramMap.get('symbol');
    // Service wird direkt aus Component aufgerufen:
    this.iexService.stockCompany(symbol).subscribe(r => this.stockCompany = r);
  }

}
