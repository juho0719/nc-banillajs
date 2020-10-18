const weather = document.querySelector(".js-weather");
const API_KEY = "4e64eaa8fe03029e882d288356c63b51";
const COORDS = "coords";

function getWeather(latitude, longitude) {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}appid=${API_KEY}&units=metric`
	).then(function (response) {
		return response.json();
	}).then(function (json) {
		const temperature = json.mail.temp;
		const place = json.name;
		weather.innerText = `${temperature} @ ${place}`;
	});
}

function saveCoords(coordsObj) {
	localStorage.setItem(COORDS, coordsObj);
}

function handleGeoSuccess(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitide,
		longitude
	};
	saveCoords(coordsObj);
	getWeather(latitude, longitude);
}

function handleGeoError(position) {

}

function askForCoords() {
	navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCorods() {
	const loadedCoords = localStorage.getItem(COORDS);
	if (loadCoords === null) {
		askForCoords();
	} else {
		const parseCoords = JSON.parse(loadedCoords);
		getWeather(parseCoords.latitude, parseCoords.longitude);
	}
}

function init() {

}

init();