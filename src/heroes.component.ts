import {Component} from 'angular2/core';
import HeroService from "./hero.service";
import HeroDetailComponent from "./hero-detail.component";
import {FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common'

@Component({
	selector: 'heroes',
	template: `
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
export default class HeroesComponent {
	constructor(public heroService: HeroService){
	}
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