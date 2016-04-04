import {Component, Input, } from 'angular2/core';
import {Cafe} from './cafe';

@Component({
    selector: 'cafe',
    template: `
        <div class="cafe">
            <h2>{{cafe.name}}</h2>
            <img src={{cafe.picture}}>
        </div>
    `,
    styles:[`
        .cafe {
            display: inline-block;
            margin: 25px;
            max-width: 300px;
         }

         img {
            max-width: 220px;
         }
    `]
})
export class CafeComponent {
    @Input()
    cafe: Cafe;
}