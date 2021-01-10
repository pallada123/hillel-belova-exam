export default class LocationView {
	constructor() {

	}

	locationRender(weather) {
		console.log(weather);
	}

	locationUnavailableRender() {
		console.log('извините, данные недоступны');
	}

	locationRefuseRender() {
		console.log('вы отказались');
	}


}