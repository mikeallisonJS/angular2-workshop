import 'reflect-metadata';
import 'zone.js';
import {bootstrap} from 'angular2/bootstrap'
import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common'

@Component({
	selector: 'app',
	styles: [`
	.heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
	.heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
	.heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
	.heroes .badge {
	font-size: small;
	color: white;
	padding: 0.1em 0.7em;
	background-color: #369;
	line-height: 1em;
	position: relative;
	left: -1px;
	top: -1px;
	}
	.selected { background-color: #EEE; color: #369; }
	`],
	template: `
	<h1>{{title}}</h1>
	<h2>My Heroes</h2>
	<ul class="heroes">
	  <li *ngFor="#hero of heroes" (click)="onSelect(hero)">
	  	<span class="badge">{{hero.id}}</span> {{hero.name}}
	  </li>
	</ul>
	<div *ngIf="selectedHero">
		<h2>{{selectedHero.name}} details!</h2>
		<div><label>id: </label>{{selectedHero.id}}</div>
		<div><label>name: </label><input [(ngModel)]="selectedHero.name" placeholder="name"></div>
	</div>
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
	selectedHero;
	onSelect(hero) {
		this.selectedHero = hero;
	}
}

var HEROES = [
	{ "id": 1, "name": "Drizzt Do'Urden" },
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