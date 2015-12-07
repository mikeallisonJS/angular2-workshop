import 'reflect-metadata';
import 'zone.js';
import {bootstrap, Component} from 'angular2/angular2';

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
	public title = 'Tour of Heroes';
	public hero = `Drizzt Do'Urden`;
}

bootstrap(App);