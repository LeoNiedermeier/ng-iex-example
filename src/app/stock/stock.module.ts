import {StockCompanyComponent} from './company/company/stock-company.component';
import {StockNewsComponent} from './news/stock-news/stock-news.component';
import {QuoteInformationComponent} from './quote-information/quote-information/quote-information.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StockRoutingModule} from './stock-routing.module';
import { StockComponent } from './stock/stock.component';

@NgModule({
  imports: [
    CommonModule,
    StockRoutingModule
  ],
  declarations: [
    StockCompanyComponent,
    StockNewsComponent,
    QuoteInformationComponent,
    StockComponent
  ]
})
export class StockModule {}