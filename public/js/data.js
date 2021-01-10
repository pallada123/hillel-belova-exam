export default class Data {

	static getRate() {
		let data = fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
		return data.then(res => res.json());
	}

	static getLocation(success, error) {
		const options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		};

		navigator.geolocation.getCurrentPosition(success, error, options);
	}

	static getLocationWeather(location) {
		let data = fetch('https://api.openweathermap.org/data/2.5/weather?' + location + '&units=metric&appid=b3b5be1d5c8dfc8844ca2b0e047e0cee');
		return data.then(async res => {
			const result = await res.json();
			if (result.cod !== 200) {
				throw new Error('Code: ' + result.cod + '. ' + result.message);
			}
			return result;
		});
	}

	/* get weather */
// getWeather() {
// 	let data = fetch('https://api.openweathermap.org/data/2.5/weather?q=Харків&units=metric&appid=b3b5be1d5c8dfc8844ca2b0e047e0cee&lang=uk');
// 	data
// 	.then(res => res.json()
// 		.then(weather => {
// 			div.innerHTML = `<pre>${JSON.stringify(weather, null, '  ')}</pre>`;
// 			// console.log(weather);
// 		})
// 	);
//
// }
	/* /get weather */

//button.addEventListener('click', getWeather);

	/* get cities from DB */
// getData() {
//
// 	let data = fetch('/cities');
// 	data
// 	.then(res => res.json()
// 		.then(cities => {
// 			div.innerText = cities;
// 		})
// 	);
//
// }
//
// button.addEventListener('click', getData);
	/* /test */




}