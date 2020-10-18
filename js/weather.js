
const COORDS = "coords";

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

	}
}

function init() {

}

init();