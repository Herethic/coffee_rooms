import {Component, Input} from 'angular2/core';
import {Cafe} from './cafe';

@Component({
    selector: 'cafe',
    template: `
        <h2>{{cafe.name}}</h2>
        <img src={{cafe.picture}}>
    `
})
export class CafeComponent {
    @Input()
    cafe: Cafe;
}