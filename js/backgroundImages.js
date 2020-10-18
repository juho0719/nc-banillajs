const body = document.querySelector("body");

const IMAGE_NUMBER = 3;

function paintImage(imgNum) {
	const image = new Image();
	image.src = `images/${imgNum}.jpg`;
	image.classList.add("bgImage");
	body.prepend(image);
}

function genRandom() {
	return Math.floor(Math.random() * IMAGE_NUMBER);
}

function init() {
	const ranNum = getRandom();
	paintImage(ranNum);
}

init();