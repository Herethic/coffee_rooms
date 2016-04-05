import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {CafeComponent} from './cafe/cafe.component';
import {Cafe} from "./cafe/cafe";
import {CafeService} from './cafe/cafe.service';

@Component({
    selector:'cafe-list',
    template: `
        <cafe *ngFor="#cafe of coffeeRooms" (click)="onSelect(cafe)" [cafe]="cafe"></cafe>
    `,
    directives: [CafeComponent],
    providers: [CafeService]
})
export class CafeList  implements OnInit {
    coffeeRooms: Cafe[];
    chosenCafe: number;

    constructor(
        private _cafeService: CafeService,
        private _router: Router
    ) { }

    getCoffeeRooms() {
        this._cafeService.getCoffeeRooms().then(coffeeRooms => this.coffeeRooms = coffeeRooms);
    }

    ngOnInit() {
        this.getCoffeeRooms();
    }
    onSelect(cafe: Cafe) {
        let link = ['CafeDetails', { id: cafe.id }];
        this._router.navigate(link);
    }
}