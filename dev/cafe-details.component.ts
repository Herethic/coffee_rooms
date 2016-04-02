import {
    Component,
    Input,
    SimpleChange
} from 'angular2/core';

import {CafeDetails} from "./cafe-details";
import {COFFEE_DETAILS} from "./cafe-details.data";

@Component({
    selector: 'cafe-details',
    template:`
        <div>
          <h2>{{cafe.name}} details!</h2>
          <div><label>id: </label>{{cafe.id}}</div>
          <div>
            <img src={{cafe.picture}}>
            <div>
                <label>Description: </label> <br>
                {{cafe.description}}
            </div>
          </div>
        </div>
    `
})
export class CafeDetailsComponent{
    @Input() cafeId: number;

    coffeeDetails = COFFEE_DETAILS;
    cafe = CafeDetails;

    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        if (this.cafeId) {
            this.cafe = this.coffeeDetails[changes['cafeId'].currentValue - 1];
        }
    }
}