import { StockCompanyComponent } from './company/company/stock-company.component';
import { StockNewsResolverService } from './news/stock-news-resolver.service';
import { StockNewsComponent } from './news/stock-news/stock-news.component';
import { QuoteInformationResolverService } from './quote-information/quote-information-resolver.service';
import { QuoteInformationComponent } from './quote-information/quote-information/quote-information.component';
import { StockComponent } from './stock/stock.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    // :symbol ist path parameter
    path: 'stock/:symbol',
    component: StockComponent,
    // die children werden über stock/:symbol/news etc agesprochen.
    children: [
      {
        path: 'news',
        component: StockNewsComponent,
        // bevor die Component angezeigt wird, wird der Service aufgerufen und die Daten aufgelöst
        resolve: {
          stockNews: StockNewsResolverService
        }
      },
      {
        // service wird direkt aus StockCompanyComponent aufgerufen, also kein resolve
        path: 'company',
        component: StockCompanyComponent
      },
      {
        path: 'quote',
        component: QuoteInformationComponent,
        // bevor die Component angezeigt wird, wird der Service aufgerufen und die Daten aufgelöst
        resolve: {
          quoteInformation: QuoteInformationResolverService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule {}
