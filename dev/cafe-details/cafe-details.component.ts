import {
    Component,
    Input,
    SimpleChange
} from 'angular2/core';

import {CafeDetails} from "./cafe-details";
import {COFFEE_DETAILS} from "./mock-cafe-details";
import {CafeDetailsService} from "./cafe-details.service";

@Component({
    selector: 'cafe-details',
    template:`
        <div *ngIf="synced">
          <h2>{{cafeDetails.name}} details!</h2>
          <div><label>id: </label>{{cafeDetails.id}}</div>
          <div>
            <img src={{cafeDetails.picture}}>
            <div>
                <label>Description: </label> <br>
                {{cafeDetails.description}}
            </div>
          </div>
        </div>
        <div *ngIf="!synced">Loading...</div>
    `,
    providers: [CafeDetailsService]
})
export class CafeDetailsComponent {
    @Input() cafeId: number;

    cafeDetails = CafeDetails;
    private synced: boolean;

    constructor(private _cafeDetailsService: CafeDetailsService) { }

    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        if (this.cafeId) {
            this.synced = false;
            this._cafeDetailsService.getCafeDetailsSlowly(this.cafeId - 1)
                .then((cafeDetails) => {
                    this.cafeDetails = cafeDetails;
                    this.synced = true;
                });
        }
    }
}