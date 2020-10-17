import "../css/style.css";

cosnt form = document.querySelector(".js-form"),
	input = form.querySelector("input"),
	greeting = document.querySelector(".js-greetings");

const USER_LS = "user",
	ACTIVE = "active";

function askForName() {
	greeting.classList.remove(ACTIVE);
	form.classList.add(ACTIVE);
	input.value = "";
}

function paintGreeting(text) {
	form.classList.remove(ACTIVE);
	greeting.classList.add(ACTIVE);
	greeting.innerText = `Hello ${text}`;
}

function init() {
	const name = localStorage.getItem(USER_LS);
	if (name === null) {
		askForName();
	} else {
		paintGreeting(name);
	}
}

function saveName(event) {
	event.preventDefault();
	localStorage.setItem(USER_LS, input.value);
	paintGreeting(input.value);
}

form.addEventListener("submit", saveName);
init();