import {Component, Input} from 'angular2/core';

@Component({
    selector: 'page-header',
    template: `
        <header>
            <h1>{{title}}</h1>
        </header>
    `
})
export class PageHeader {
    @Input() title: string;
}