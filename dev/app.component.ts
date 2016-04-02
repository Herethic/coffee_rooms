import {Component} from 'angular2/core';

import {CafeComponent} from './cafe.component';
import {COFFEE_ROOMS} from './cafe.data';
import {Cafe} from "./cafe";
import {CafeDetailsComponent} from "./cafe-details.component";
import {PageHeader} from "./header.component";

@Component({
    selector: 'my-app',
    template:`
        <page-header title={{title}}></page-header>
        <cafe *ngFor="#cafe of coffeeRooms" (click)="onSelect(cafe)" [cafe]="cafe"></cafe>
        <cafe-details  *ngIf="chosenCafe" [cafeId]="chosenCafe"></cafe-details>
  `,
    directives: [CafeComponent, CafeDetailsComponent, PageHeader]
})
export class AppComponent {
    title = 'List of coffee rooms';
    coffeeRooms = COFFEE_ROOMS;
    chosenCafe: number;

    onSelect(cafe: Cafe) {
        this.chosenCafe = cafe.id;
    }
}

