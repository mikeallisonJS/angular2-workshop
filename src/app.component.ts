import 'reflect-metadata';
import 'zone.js';
import {bootstrap} from 'angular2/bootstrap'
import {Component} from 'angular2/core';
import HeroService from "./hero.service";
import HeroesComponent from "./heroes.component";
import './app.css';

@Component({
	selector: 'app',
	template: `
		<h1>{{title}}</h1>
		<heroes></heroes>
	`,
	directives: [HeroesComponent]
})
class App {
	title = 'Tour of Heroes';
}

bootstrap(App, [HeroService]);