import {Injectable, OnDestroy} from '@angular/core';
import {Subscription, Subject} from 'rxjs';
import { filter } from 'rxjs/operators';


@Injectable()
export class EventService implements OnDestroy {

  private readonly subject = new Subject<any>();
  constructor() {
  }


  ngOnDestroy(): void {
    this.subject.complete();
  }

  subscribe<T>(eventType: {new(...args: any[]): T},
    next?: (value: any) => void, error?: (error: any) => void, complete?: () => void):
    Subscription {
    return this.subject.pipe(filter(e => e.constructor === eventType)).subscribe(next, error, complete);
  }

  publish(event: any): void {
    this.subject.next(event);
  }
}
