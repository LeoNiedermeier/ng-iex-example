import { NgModule } from '@angular/core';
import { QuoteInformation } from './shared/quote-information';
import {QuoteInformationComponent} from './stock/quote-information/quote-information/quote-information.component';
import {RefDataSymbolListComponent} from './refdata/ref-data-symbol-list/ref-data-symbol-list.component';
import {Routes, RouterModule} from '@angular/router';
import { StockCompany } from './shared/stock-company';
import {StockCompanyComponent} from './stock/company/company/stock-company.component';
import {StockNewsComponent} from './stock/news/stock-news/stock-news.component';

const appRoutes: Routes = [
  {
    path: 'ref-data-symbols',
    component: RefDataSymbolListComponent
  },
  {
    path: 'stock/:symbol/news',
    component: StockNewsComponent
  },
  {
    path: 'stock/:symbol/company',
    component: StockCompanyComponent
  },
  {
    path: 'stock/:symbol/quote',
    component: QuoteInformationComponent
  },
  {
    path: '',
    redirectTo: '/ref-data-symbols',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    {enableTracing: true} // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
