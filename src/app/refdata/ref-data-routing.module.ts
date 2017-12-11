
import {RefDataSymbolListComponent} from './ref-data-symbol-list/ref-data-symbol-list.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
const routes: Routes = [
  {
    path: 'ref-data-symbols',
    component: RefDataSymbolListComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefDataRoutingModule {}
