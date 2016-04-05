import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {PageHeader} from "./header.component";
import {CafeList} from "./cafe-list.component";
import {CafeDetailsComponent} from "./cafe-details/cafe-details.component";

@Component({
    selector: 'my-app',
    template:`
        <page-header title={{title}}></page-header>
        <nav>
            <a [routerLink]="['CoffeeRooms']">Coffee Rooms</a>
        </nav>
        <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/coffee_rooms',
        name: 'CoffeeRooms',
        component: CafeList,
        useAsDefault: true
    },
    {
        path: '/cafe/:id',
        name: 'CafeDetails',
        component: CafeDetailsComponent
    }
])
export class AppComponent{
    title = 'List of coffee rooms';
}

