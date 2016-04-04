import {Component, OnInit} from 'angular2/core';

import {CafeComponent} from './cafe/cafe.component';
import {Cafe} from "./cafe/cafe";
import {CafeService} from './cafe/cafe.service';

import {CafeDetailsComponent} from "./cafe-details/cafe-details.component";

import {PageHeader} from "./header.component";

@Component({
    selector: 'my-app',
    template:`
        <page-header title={{title}}></page-header>
        <cafe *ngFor="#cafe of coffeeRooms" (click)="onSelect(cafe)" [cafe]="cafe"></cafe>
        <cafe-details  *ngIf="chosenCafe" [cafeId]="chosenCafe"></cafe-details>
  `,
    directives: [CafeComponent, CafeDetailsComponent, PageHeader],
    providers: [CafeService]
})
export class AppComponent implements OnInit {
    title = 'List of coffee rooms';
    coffeeRooms: Cafe[];
    chosenCafe: number;

    constructor(private _cafeService: CafeService) { }

    getCoffeeRooms() {
        this._cafeService.getCoffeeRooms().then(coffeeRooms => this.coffeeRooms = coffeeRooms);
    }

    ngOnInit() {
        this.getCoffeeRooms();
    }
    onSelect(cafe: Cafe) {
        this.chosenCafe = cafe.id;
    }
}

