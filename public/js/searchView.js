export default class SearchView {
	constructor() {

	}

	searchRender() {
		this.mainSearch = document.querySelector('#weather-favorite');
		this.search = document.createElement('div');
		this.container = document.createElement('div');
		this.input = document.createElement('input');
		this.button = document.createElement('button');

		this.search.setAttribute('id', 'city-search');
		this.container.classList.add('city-search-container');
		this.input.setAttribute('type', 'text');
		this.input.setAttribute('placeholder', 'Enter the city...');

		this.button.innerText = 'Add';

		this.container.append(this.input, this.button);
		this.search.append(this.container);
		this.mainSearch.append(this.search);
	}

	showCityError(msg) {
		const p = document.createElement('p');
		if (msg === 'spelling') {
			p.innerHTML = 'Sorry, but we don\'t know this city. Please check the&nbsp;spelling.';
		} else if (msg === 'done') {
			p.innerHTML = 'This city already exists on&nbsp;your list';
		}

		this.search.appendChild(p);
		this.clearInput();
	}

	clearInput() {
		this.input.value = '';
	}

	removeCityError() {
		const spellingError = document.querySelector('#city-search p');

		if(spellingError) {
			spellingError.remove();
		}
	}

	disableSearch() {
		const input = document.querySelector('#city-search input');
		const button = document.querySelector('#city-search button');
		input.setAttribute('disabled', 'disabled');
		button.setAttribute('disabled', 'disabled');
	}

	enableSearch() {
		const input = document.querySelector('#city-search input');
		const button = document.querySelector('#city-search button');
		input.removeAttribute('disabled');
		button.removeAttribute('disabled');
	}

}