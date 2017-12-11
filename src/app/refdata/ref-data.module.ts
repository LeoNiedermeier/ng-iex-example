

import {RefDataRoutingModule} from './ref-data-routing.module';
import {RefDataSymbolListComponent} from './ref-data-symbol-list/ref-data-symbol-list.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    RefDataRoutingModule
  ],
  declarations: [
    RefDataSymbolListComponent
  ],
})
export class RefDataModule {}
