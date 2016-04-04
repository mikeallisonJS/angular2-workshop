import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from 'angular2/bootstrap'
import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common'
import HeroDetailComponent from "./hero-detail.component";
import HeroService from "./hero.service";

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
	  <li *ngFor="#hero of heroes"
	   [class.selected]="getSelectedClass(hero)"
	   (click)="onSelect(hero)">
	  	<span class="badge">{{hero.id}}</span> {{hero.name}}
	  </li>
	</ul>
	<hero-detail *ngIf="selectedHero" [hero]="selectedHero">
	</hero-detail>
	`,
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, HeroDetailComponent]
})
class App {
	constructor(public heroService: HeroService) {
	}
	title = 'Tour of Heroes';
	hero = {
		id: 1,
		name: 'Drizzt Do\'Urden'
	};
	heroes = this.heroService.getHeroes();
	selectedHero;
	onSelect(hero) {
		this.selectedHero = hero;
	}
	getSelectedClass(hero) {
		return hero === this.selectedHero;
	}
}

bootstrap(App, [HeroService]);