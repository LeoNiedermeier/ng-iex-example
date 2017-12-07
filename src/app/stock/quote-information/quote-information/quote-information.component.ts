import { IexService } from '../../../shared/iex.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuoteInformation } from '../../../shared/quoteinformation';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './quote-information.component.html'
})
export class QuoteInformationComponent implements OnInit {
  symbol: string;
  qouteInformation: QuoteInformation;

  constructor(
    private iexService: IexService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.symbol = this.activatedRoute.snapshot.paramMap.get('symbol');

    this.iexService
      .quoteInformation(this.symbol)
      .subscribe(qi => (this.qouteInformation = qi));
  }
}
