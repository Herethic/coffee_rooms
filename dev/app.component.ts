import {Component} from 'angular2/core';

import {CafeComponent} from './cafe.component';
import {COFFEE_ROOMS} from './cafe.data';
import {Cafe} from "./cafe";
import {CafeDetailsComponent} from "./cafe-details.component";

@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>
        <div *ngFor="#cafe of coffeeRooms" (click)="onSelect(cafe)">
            <cafe [cafe]="cafe"></cafe>
        </div>
        <cafe-details [cafeId]="chosenCafe"></cafe-details>
  `,
    directives: [CafeComponent, CafeDetailsComponent]
})
export class AppComponent {
    title = 'List of coffee rooms';
    coffeeRooms = COFFEE_ROOMS;
    chosenCafe: number;

    onSelect(cafe: Cafe) {
        this.chosenCafe = cafe.id;
    }
}

