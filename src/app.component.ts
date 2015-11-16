import 'reflect-metadata';
import 'zone.js';
import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import Hero from './hero';

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
	  <li *ng-for="#hero of heroes" (click)="onSelect(hero)">
	  	<span class="badge">{{hero.id}}</span> {{hero.name}}
	  </li>
	</ul>
	<div *ng-if="selectedHero">
		<h2>{{selectedHero.name}} details!</h2>
		<div><label>id: </label>{{selectedHero.id}}</div>
		<div><label>name: </label><input [(ng-model)]="selectedHero.name" placeholder="name"></div>
	</div>
	`,
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
class App{
	public title = 'Tour of Heroes';
	public hero: Hero = {
		id: 1,
		name: 'Drizzt Do\'Urden'
	}
	public heroes = HEROES;
	public selectedHero: Hero;
	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
}

var HEROES: Hero[] = [
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