import 'reflect-metadata';
import 'zone.js';
import {bootstrap, Component, FORM_DIRECTIVES} from 'angular2/angular2';
import Hero from './hero';

@Component({
	selector: 'app',
	template: `
	<h1>{{title}}</h1>
	<h2>{{hero.name}} details!</h2>
	<div><label>id: </label>{{hero.id}}</div>
	<div><label>name: </label><input [(ng-model)]="hero.name" placeholder="name"></div>
	`,
	directives: [FORM_DIRECTIVES]
})
class App{
	public title = 'Tour of Heroes';
	public hero: Hero = {
		id: 1,
		name: 'Drizzt Do\'Urden'
	}

}

bootstrap(App);