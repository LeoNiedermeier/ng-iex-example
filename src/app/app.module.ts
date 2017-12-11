import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RefDataModule} from './refdata/ref-data.module';
import {IexService} from './shared/iex.service';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {StockModule} from './stock/stock.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // routing modules, App routing muss das letzt sein, das auch '' dort definiert
    StockModule,
    RefDataModule,
    AppRoutingModule
  ],
  providers: [IexService],
  bootstrap: [AppComponent]
})
export class AppModule {}
