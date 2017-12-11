import {Quote} from './quote';
export class QuoteInformation {

  constructor(readonly current: Quote, readonly open: Quote, readonly close: Quote) {
  }
}
