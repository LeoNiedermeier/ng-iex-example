
// https://github.com/angular/angular/issues/20260
// import localeDe from '@angular/common/locales/de';
// import localeDeExtra from '@angular/common/locales/extra/de';
import {AdminModule} from './admin/admin.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IexService} from './shared/iex.service';
import {LOCALE_ID, NgModule} from '@angular/core';
import {RefDataModule} from './refdata/ref-data.module';
import {EventDecorator} from './shared/event/event-decorator';
import {EventService} from './shared/event/event.service';
import {registerLocaleData} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StockModule} from './stock/stock.module';

// see https://angular.io/guide/i18n#setting-up-the-locale-of-your-app
// and https://angular.io/guide/i18n#i18n-pipes
// https://github.com/angular/angular/issues/20260
// registerLocaleData(localeDe, 'de-De', localeDeExtra);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    EventDecorator,
    // routing modules, App routing muss das letzt sein, das auch '' dort definiert
    StockModule,
    RefDataModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [
    // {provide: LOCALE_ID, useValue: 'de-DE'},
    IexService,
    EventService],
  bootstrap: [AppComponent]
})
export class AppModule {}
