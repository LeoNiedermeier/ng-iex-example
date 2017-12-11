import {StockCompanyComponent} from './company/company/stock-company.component';
import {StockNewsComponent} from './news/stock-news/stock-news.component';
import {QuoteInformationComponent} from './quote-information/quote-information/quote-information.component';
import {StockComponent} from './stock/stock.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'stock',
    component: StockComponent,
    children: [
      {
        path: ':symbol/news',
        component: StockNewsComponent
      },
      {
        path: ':symbol/company',
        component: StockCompanyComponent
      },
      {
        path: ':symbol/quote',
        component: QuoteInformationComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule {}
