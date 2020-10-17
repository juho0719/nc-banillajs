const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h2");

function getTime() {
	// Don't delete this.
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
	getTime();
	setInterval(getTime, 1000);
}
init();