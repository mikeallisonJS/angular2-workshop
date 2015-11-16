import 'reflect-metadata';
import 'zone.js';
import {bootstrap, Component, FORM_DIRECTIVES, NgFor} from 'angular2/angular2';
import Hero from './hero/hero';

@Component({
	selector: 'app',
	template: `
	<h1>{{title}}</h1>
	<h2>My Heroes</h2>
	<ul class="heroes">
	  <li *ng-for="#hero of heroes">
	  	<span class="badge">{{hero.id}}</span> {{hero.name}}
	  </li>
	</ul>
	<h2>{{hero.name}} details!</h2>
	<div><label>id: </label>{{hero.id}}</div>
	<div><label>name: </label><input [(ng-model)]="hero.name" placeholder="name"></div>
	`,
	directives: [FORM_DIRECTIVES, NgFor]
})
class App{
	public title = 'Tour of Heroes';
	public hero: Hero = {
		id: 1,
		name: 'Drizzt Do\'Urden'
	}
	public heroes = HEROES;
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