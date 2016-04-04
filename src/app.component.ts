import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from 'angular2/bootstrap'
import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common'

@Component({
	selector: 'app',
	template: `
	<h1>{{title}}</h1>
	<h2>{{hero.name}} details!</h2>
	<div><label>id: </label>{{hero.id}}</div>
	<div><label>name: </label><input [(ngModel)]="hero.name" placeholder="name"></div>
	`,
	directives: [FORM_DIRECTIVES]
})
class App {
	title = 'Tour of Heroes';
	hero = {
		id: 1,
		name: `Drizzt Do'Urden`
	};
}

bootstrap(App);