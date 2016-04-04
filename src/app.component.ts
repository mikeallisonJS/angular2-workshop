import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from 'angular2/bootstrap'
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import HeroService from "./hero.service";
import HeroesComponent from "./heroes.component";
import './app.css';

@Component({
	selector: 'app',
	template: `
		<h1>{{title}}</h1>
		<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path: '/', redirectTo: ['Heroes']},
	{path: '/heroes', component: HeroesComponent, name: 'Heroes'}
])
class App {
	title = 'Tour of Heroes';
}

bootstrap(App, [HeroService, ROUTER_PROVIDERS]);