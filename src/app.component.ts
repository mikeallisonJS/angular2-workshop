import 'reflect-metadata';
import 'zone.js';
import {bootstrap} from 'angular2/bootstrap'
import {Component} from 'angular2/core';

@Component({
	selector: 'app',
	template: `
	<div>
		<h1>{{title}}</h1>
		<h2>{{hero}}</h2>
	</div>
	`
})
class App {
	title = 'Tour of Heroes';
	hero = `Drizzt Do'Urden`;
}

bootstrap(App);