import {IexService} from '../../../shared/iex.service';
import {StockCompany} from '../../../shared/stockcompany';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './stock-company.component.html'
})
export class StockCompanyComponent implements OnInit {

  stockCompany: StockCompany;

  constructor(private iexService: IexService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const symbol = this.activatedRoute.snapshot.paramMap.get('symbol');
    this.iexService.stockCompany(symbol).subscribe(r => this.stockCompany = r);
  }

}
