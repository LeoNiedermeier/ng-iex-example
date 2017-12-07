import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RefDataSymbolListComponent} from './refdata/ref-data-symbol-list/ref-data-symbol-list.component';
import {IexService} from './shared/iex.service';
import {StockNewsComponent} from './stock/news/stock-news/stock-news.component';
import {Routes, RouterModule} from '@angular/router';
import {StockCompanyComponent} from './stock/company/company/stock-company.component';
import {HttpClientModule} from '@angular/common/http';
import { QuoteInformationComponent } from './stock/quote-information/quote-information/quote-information.component';


@NgModule({
  declarations: [
    AppComponent,
    RefDataSymbolListComponent,
    StockNewsComponent,
    StockCompanyComponent,
    QuoteInformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [IexService],
  bootstrap: [AppComponent]
})
export class AppModule {}
