import {Injectable} from 'angular2/core';

import {COFFEE_DETAILS} from './mock-cafe-details';
import {CafeDetails} from './cafe-details';

Injectable()
export class CafeDetailsService {
    getCafeDetails(i: number) {
        return Promise.resolve(COFFEE_DETAILS[i]);
    }

    getCafeDetailsSlowly(i: number) {
        return new Promise<CafeDetails[]>(resolve =>
            setTimeout(()=>resolve(COFFEE_DETAILS[i]), 2000)
        );
    }
}