import {msgErrorSpelling, msgErrorCityExists} from './data.js';

export default class SearchView {

	searchRender() {
		const mainSearch = document.querySelector('#weather-favorite');
		this.search = document.createElement('div');
		const container = document.createElement('div');
		this.input = document.createElement('input');
		this.button = document.createElement('button');

		this.search.setAttribute('id', 'city-search');
		container.classList.add('city-search-container');
		this.input.setAttribute('type', 'text');
		this.input.setAttribute('placeholder', 'Enter the city...');

		this.button.innerText = 'Add';

		container.append(this.input, this.button);
		this.search.append(container);
		mainSearch.prepend(this.search);
	}

	showCityError(msg) {
		const p = document.createElement('p');
		if (msg === 'spelling') {
			p.innerHTML = msgErrorSpelling;
		} else if (msg === 'done') {
			p.innerHTML = msgErrorCityExists;
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