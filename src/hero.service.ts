import {Injectable} from 'angular2/core';

@Injectable()
export default class HeroService {
	public getHeroes() {
		return HEROES;
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