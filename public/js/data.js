

// const div = document.querySelector('div#cities');
// const button = document.querySelector('button');

/* get weather */
// function getWeather() {
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
// function getData() {
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



/* get user geolocation */

// const options = {
// 	enableHighAccuracy: true,
// 	timeout: 5000,
// 	maximumAge: 0
// };
//
// function success(pos) {
// 	const crd = pos.coords;
//
// 	console.log('Ваше текущее метоположение:');
// 	console.log(`Широта: ${crd.latitude}`);
// 	console.log(`Долгота: ${crd.longitude}`);
// 	console.log(`Плюс-минус ${crd.accuracy} метров.`);
// }
//
// function error(err) {
// 	console.warn(`ERROR(${err.code}): ${err.message}`);
// }
//
// navigator.geolocation.getCurrentPosition(success, error, options);
/* /geolocation */