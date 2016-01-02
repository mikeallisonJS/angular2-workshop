import {Component} from 'angular2/core';

@Component({
	selector: 'hero-detail',
	template: `
		<div>
			<h2>{{hero.name}} details!</h2>
			<div><label>id: </label>{{hero.id}}</div>
			<div><label>name: </label><input [(ngModel)]="hero.name" placeholder="name"></div>
		</div>
	`,
	inputs: ['hero']
})
export default class HeroDetailComponent{
	hero;
}