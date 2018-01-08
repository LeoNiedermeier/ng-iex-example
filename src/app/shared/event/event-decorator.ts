
import {EventService} from './event.service';
import {NgModule, getPlatform} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import 'reflect-metadata';

@NgModule()
export class EventDecorator {

  static eventService: EventService;
  constructor(ev: EventService) {
    EventDecorator.eventService = ev;
  }
}


export function EventListener(): MethodDecorator {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // https://www.npmjs.com/package/reflect-metadata
    const fn = Reflect.getMetadata('design:paramtypes', target, propertyKey);

    if (fn && fn[0].prototype.constructor && target[propertyKey]) {
      const eventType = fn[0].prototype.constructor;
      const method = target[propertyKey];

      const ngOnInit = target.constructor.prototype.ngOnInit;
      //  let subscription: Subscription;
      target.constructor.prototype.ngOnInit = function() {
        const inj = getPlatform().bootstrapModule;
        // this ist z.B. die "component"
        this['subscription' + propertyKey] = EventDecorator.eventService.subscribe(eventType, method);
        // ursprüngliche Methode aufrufen nicht vergessen.
        if (ngOnInit) {
          ngOnInit.apply(this);
        }
      };

      // Wichtig: unsubscribe, sonst bleibt die Subscription, auch wenn die Komponente nicht mehr da ist
      const ngOnDestroy = target.constructor.prototype.ngOnDestroy;
      target.constructor.prototype.ngOnDestroy = function() {
        if (this['subscription' + propertyKey]) {
          this['subscription' + propertyKey].unsubscribe();
        }
        if (ngOnDestroy) {
          ngOnDestroy.apply(this);
        }
      };
    }
    return descriptor;
  };
}

