
import {StockNewsComponent} from './stock/news/stock-news/stock-news.component';
import {RefDataSymbolListComponent} from './refdata/ref-data-symbol-list/ref-data-symbol-list.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
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
