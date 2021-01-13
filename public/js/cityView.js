export default class CityView {
	constructor() {

	}

	getPrevEl() {
		return document.querySelector('#city-search');
	}

	cityRender(weather, id) {
		const search = this.getPrevEl();

		const item = document.createElement('div');
		const head = document.createElement('div');
		const container = document.createElement('div');
		const img = document.createElement('img');
		const temp = document.createElement('div');
		const desc = document.createElement('div');
		const btns = document.createElement('div');
		const btnDelete = document.createElement('button');
		const btnEdit = document.createElement('button');

		item.setAttribute('data-id', id);
		img.setAttribute('alt', '');
		img.setAttribute('src', 'http://openweathermap.org/img/wn/' + weather.icon + '.png');

		item.classList.add('city-w-item');
		head.classList.add('city-w-head');
		container.classList.add('city-w-container');
		temp.classList.add('city-w-temp');
		desc.classList.add('city-w-desc');
		btns.classList.add('city-w-btns');
		btnDelete.classList.add('btnDelete');
		btnEdit.classList.add('btnEdit');

		head.innerText = weather.name + ', ' + weather.country;
		temp.innerHTML = weather.temp + '&deg;C';
		desc.innerHTML = `
			${weather.description}<br />
			feels like: ${weather.feels_like}&deg;C<br />
			wind: ${weather.wind} mps<br />
			humidity: ${weather.humidity}%
		`;
		btnDelete.innerText = 'Delete';
		btnEdit.innerText = 'Edit';

		btns.append(btnDelete, btnEdit);
		container.append(img, temp, desc, btns);
		item.append(head, container);

		search.after(item);
	}

	cityErrorRender() {
		const search = this.getPrevEl();
		const item = document.createElement('div');
		item.classList.add('city-w-item');
		item.innerHTML = '<p>The&nbsp;city has&nbsp;been added to&nbsp;your list.<br />Unfortunately, the&nbsp;weather in&nbsp;this&nbsp;city isn\'t&nbsp;available now.</p>';
		search.after(item);
	}


	getIndex(item) {
		//return item.closest('li').getAttribute('data-index');
	}

	getValue() {
		//return document.querySelector('.editedText input').value;
	}

	deleteCity(item) {
		item.remove();
	}

	disableBtn() {
		const btnEdit = document.querySelectorAll('.btnEdit');
		const btnDelete = document.querySelectorAll('.btnDelete');
		btnEdit.forEach((item) => {
			item.setAttribute('disabled', 'disabled');
		});
		btnDelete.forEach((item) => {
			item.setAttribute('disabled', 'disabled');
		});
	}

	enableBtn() {
		const btnEdit = document.querySelectorAll('.btnEdit');
		const btnDelete = document.querySelectorAll('.btnDelete');
		btnEdit.forEach((item) => {
			item.removeAttribute('disabled');
		});
		btnDelete.forEach((item) => {
			item.removeAttribute('disabled');
		});
	}

	startEditCity(id) {
		this.item = document.querySelector('div[data-id=\"' + id + '\"]');
		this.btnSave = document.createElement('button');
		this.btnEsc = document.createElement('button');
		this.input = document.createElement('input');
		this.head = this.item.firstChild;
		this.oldText = this.head.innerText;
		this.btnSave.innerHTML = 'Save';
		this.btnEsc.innerHTML = 'Cancel';
		this.btnSave.classList.add('btnSave');
		this.btnEsc.classList.add('btnEsc');
		this.input.setAttribute('type', 'text');

		this.btns = document.querySelector('div[data-id=\"' + id + '\"] .city-w-btns');
		this.btnDelete = document.querySelector('div[data-id=\"' + id + '\"] .btnDelete');

		this.btns.insertBefore(this.btnEsc, this.btnDelete);
		this.btns.insertBefore(this.btnSave, this.btnEsc);
		this.head.innerText = '';
		this.head.append(this.input);

		this.city = this.oldText.split(', ');
		this.input.value = this.city[0];
	}

	clearEdit() {
		this.btnSave.remove();
		this.btnEsc.remove();
		this.input.remove();
	}

	cancelEditCity() {
		this.clearEdit();
		this.head.innerText = this.oldText;
	}

	finishEditCity() {
		// const value = this.getValue();
		// this.clearEdit().innerText = value;
	}

}