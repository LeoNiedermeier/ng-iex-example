import {NgModule, getPlatform} from '@angular/core';
import {Subscription} from 'rxjs';
import 'reflect-metadata';


const requiredMetadataKey = Symbol('required');

export function MyParam(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    const existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}

export function RequestDecorator(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    const method = descriptor.value;
    descriptor.value = function () {
      const requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
      console.log(propertyName);
        if (requiredParameters) {
            for (const parameterIndex of requiredParameters) {
              console.log(parameterIndex);
              console.log(arguments[parameterIndex]);
                if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
                    throw new Error('Missing required argument.');
                }
            }
        }

        return method.apply(this, arguments);
    };
}
