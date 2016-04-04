import {Injectable} from 'angular2/core';

import {COFFEE_ROOMS} from './mock-cafe';
import {Cafe} from './cafe';

Injectable()
export class CafeService {
    getCoffeeRooms() {
        return Promise.resolve(COFFEE_ROOMS);
    }

    getCoffeeRoomsSlowly() {
        return new Promise<Cafe[]>(resolve =>
            setTimeout(()=>resolve(COFFEE_ROOMS), 2000)
        );
    }
}