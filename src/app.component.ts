import 'reflect-metadata';
import 'zone.js';
import {bootstrap} from 'angular2/bootstrap'
import {Component} from 'angular2/core';
import Hero from './hero';

@Component({
	selector: 'app',
	template: `
	<h1>{{title}}</h1>
	<h2>{{hero.name}} details!</h2>
	<div><label>id: </label>{{hero.id}}</div>
	<div><label>name: </label>{{hero.name}}</div>
	`
})
class App {
	public title = 'Tour of Heroes';
	public hero: Hero = {
		id: 1,
		name: `Drizzt Do'Urden`
	};
}

bootstrap(App);