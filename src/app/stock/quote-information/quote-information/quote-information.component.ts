import {IexService} from '../../../shared/iex.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuoteInformation} from '../../../shared/quote-information';
import {Observable} from 'rxjs/Observable';

@Component({
  templateUrl: './quote-information.component.html'
})
export class QuoteInformationComponent implements OnInit {

  qouteInformation: QuoteInformation;

  constructor(private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {

    this.activatedRoute.data.subscribe(
      (data: {quoteInformation, QuoteInformation}) => this.qouteInformation = data.quoteInformation
    );
  }
}
