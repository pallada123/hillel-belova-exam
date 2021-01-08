document.addEventListener('DOMContentLoaded', () => {

	const div = document.querySelector('div#cities');
	const button = document.querySelector('button');

	// function getData() {
	//
	// 	let data = fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
	// 	data
	// 	.then(res => res.json()
	// 		.then(cities => {
	// 			div.innerText = cities;
	// 		})
	// 	);
	//
	// }

	function getData() {

		let data = fetch('/cities');
		data
		.then(res => res.json()
			.then(cities => {
				div.innerText = cities;
			})
		);

	}

	button.addEventListener('click', getData);

});
