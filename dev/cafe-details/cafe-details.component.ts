import {
    Component,
    Input,
    OnInit
} from 'angular2/core';

import {RouteParams} from 'angular2/router';

import {CafeDetails} from "./cafe-details";
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
export class CafeDetailsComponent implements OnInit {
    @Input() cafeId: number;

    cafeDetails = CafeDetails;
    private synced: boolean;

    constructor(
        private _cafeDetailsService: CafeDetailsService,
        private _routeParams: RouteParams
    ) { }

    ngOnInit() {
        const id = parseInt(this._routeParams.get('id'));
        this.synced = false;
        this._cafeDetailsService.getCafeDetailsSlowly(id - 1)
            .then((cafeDetails) => {
                this.cafeDetails = cafeDetails;
                this.synced = true;
            });
    }
}