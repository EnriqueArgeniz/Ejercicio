const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
		.then(blob => blob.json())
		.then(data => cities.push(...data));
function findMatches(wordToMatch, cities) {
		return cities.filter(place => {
				const encontrada = new RegExp(wordToMatch, 'gi');
				return place.city.match(encontrada) ||
						place.state.match(encontrada);
		});
}
function displayMatches(e) {
		const matchedArray = findMatches(e.target.value, cities);
		const html = matchedArray.map(place => {
				const encontrada = new RegExp(e.target.value, 'gi');
				const nombreCiudad = place.city.replace(encontrada,
						`<span class=hl>${e.target.value}</span>`)
				const nombreEstado = place.state.replace(encontrada,
						`<span class=hl>${e.target.value}</span>`)
				return `
						<li>
								<span class="name">${nombreCiudad}, ${nombreEstado}</span>
								<span class="people">${place.population}</span>
						</li>
				`
		}).join('');
		ciudades.innerHTML = html;
}
const ciudad = document.querySelector('.ciudad');
const ciudades = document.querySelector('.ciudades');
ciudad.addEventListener('change', displayMatches);
ciudad.addEventListener('keyup', displayMatches);
