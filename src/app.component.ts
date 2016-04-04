import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from 'angular2/bootstrap'
import {Component} from 'angular2/core';

@Component({
	selector: 'app',
	template: `
	<div>
		Hello World
	</div>
	`
})
class App{
}

bootstrap(App);