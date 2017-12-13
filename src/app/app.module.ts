import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';

import {AppComponent} from './app.component';
import {RefDataModule} from './refdata/ref-data.module';
import {IexService} from './shared/iex.service';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {StockModule} from './stock/stock.module';
import {registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import {AdminModule} from './admin/admin.module';

// see https://angular.io/guide/i18n#setting-up-the-locale-of-your-app
// and https://angular.io/guide/i18n#i18n-pipes
registerLocaleData(localeDe, 'de-De', localeDeExtra);

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
    AdminModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-DE'},
    IexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
