import 'reflect-metadata';
import 'zone.js';
import {bootstrap, Component} from 'angular2/angular2';

@Component({
	selector: 'app',
	template: `
	<div>
		Hello World
	</div>
	`
})
class App{
	constructor() {
		console.log('hi2!');
	}
}

bootstrap(App);