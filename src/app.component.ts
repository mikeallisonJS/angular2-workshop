import 'reflect-metadata';
import 'zone.js';
import {bootstrap} from 'angular2/bootstrap'
import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common'

@Component({
	selector: 'app',
	template: `
	<h1>{{title}}</h1>
	<h2>My Heroes</h2>
	<ul class="heroes">
	  <li *ngFor="#hero of heroes">
	  	<span class="badge">{{hero.id}}</span> {{hero.name}}
	  </li>
	</ul>
	<h2>{{hero.name}} details!</h2>
	<div><label>id: </label>{{hero.id}}</div>
	<div><label>name: </label><input [(ngModel)]="hero.name" placeholder="name"></div>
	`,
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
class App {
	title = 'Tour of Heroes';
	hero = {
		id: 1,
		name: 'Drizzt Do\'Urden'
	};
	heroes = HEROES;
}

var HEROES = [
	{ "id": 11, "name": "Varian Wrynn" },
	{ "id": 12, "name": "Thor" },
	{ "id": 13, "name": "Ironman" },
	{ "id": 14, "name": "The Hulk" },
	{ "id": 15, "name": "Superman" },
	{ "id": 16, "name": "Batman" },
	{ "id": 17, "name": "Kvothe" },
	{ "id": 18, "name": "Muad'Dib" },
	{ "id": 19, "name": "Valentine Michael Smith" },
	{ "id": 20, "name": "Odin" }
];
bootstrap(App);