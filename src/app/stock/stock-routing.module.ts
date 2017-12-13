import {StockCompanyComponent} from './company/company/stock-company.component';
import {StockNewsResolverService} from './news/stock-news-resolver.service';
import {StockNewsComponent} from './news/stock-news/stock-news.component';
import {QuoteInformationResolverService} from './quote-information/quote-information-resolver.service';
import {QuoteInformationComponent} from './quote-information/quote-information/quote-information.component';
import {StockComponent} from './stock/stock.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'stock/:symbol',
    component: StockComponent,
    children: [
      {
        path: 'news',
        component: StockNewsComponent,
        resolve: {
          'stockNews': StockNewsResolverService
        }
      },
      {
        path: 'company',
        component: StockCompanyComponent
      },
      {
        path: 'quote',
        component: QuoteInformationComponent,
        resolve: {
          'quoteInformation': QuoteInformationResolverService
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule {}
