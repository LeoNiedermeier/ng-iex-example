import {StockCompanyComponent} from './company/company/stock-company.component';
import {StockNewsResolverService} from './news/stock-news-resolver.service';
import {StockNewsComponent} from './news/stock-news/stock-news.component';
import {QuoteInformationResolverService} from './quote-information/quote-information-resolver.service';
import {QuoteInformationComponent} from './quote-information/quote-information/quote-information.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StockRoutingModule} from './stock-routing.module';
import {StockComponent} from './stock/stock.component';

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
  ],
  providers: [
    QuoteInformationResolverService,
    StockNewsResolverService
  ]
})
export class StockModule {}
