export default class SearchView {
	constructor() {

	}

	getMainEl() {
		return document.querySelector('#weather-favorite');
	}

	searchRender() {
		const mainRate = this.getMainEl();
		const search = document.createElement('div');
		this.container = document.createElement('div');
		this.input = document.createElement('input');
		this.button = document.createElement('button');

		search.setAttribute('id', 'city-search');
		this.container.classList.add('city-search-container');
		this.input.setAttribute('type', 'text');
		this.input.setAttribute('placeholder', 'Enter the city...');

		this.button.innerText = 'Add';

		this.container.append(this.input, this.button);
		search.append(this.container);
		mainRate.append(search);
	}

}