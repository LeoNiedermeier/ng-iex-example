import {IexService} from '../../shared/iex.service';
import {RefDataSymbol} from '../../shared/ref-data-symbol';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ref-data-symbol-list',
  templateUrl: './ref-data-symbol-list.component.html'
})
export class RefDataSymbolListComponent implements OnInit {
  refDataSymbols: Array<RefDataSymbol>;

  constructor(private iexService: IexService) {}

  ngOnInit(): void {
    this.refDataSymbols =
      this.iexService.allRefDataSymbols();
  }

}
