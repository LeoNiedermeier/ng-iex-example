import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IexService } from '../../../shared/iex.service';
import { Observable } from 'rxjs/Observable';
import { QuoteInformation } from '../../../shared/quote-information';

@Component({
  templateUrl: './quote-information.component.html'
})
export class QuoteInformationComponent implements OnInit {
  qouteInformation: QuoteInformation;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // wenn die Komponente erzeugt wird, sind die Daten da.
    // https://angular.io/guide/router#snapshot-the-no-observable-alternative
    this.qouteInformation = this.activatedRoute.snapshot.data.quoteInformation;

    // oder mit subscribe
    // man muss nicht unsubscribe: https://angular.io/guide/router#observable-parammap-and-component-reuse
    //    this.activatedRoute.data.subscribe(
    //      (data: {quoteInformation: QuoteInformation}) => this.qouteInformation = data.quoteInformation
    //    );
  }
}
