
const toDoForm = document.querySelector(".js-toDoForm"),
	toDoInput = toDoForm.querySelector("input"),
	toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "todos";

let toDos = [];

function deleteToDos(event) {
	const btn = event.target;
	const li = btn.parentNode;
	toDoList.removeChild(li);
	const cleanToDos = toDos.filter(function (toDo) {
		return toDo.id !== parseInt(li.id);
	});
	toDos = cleanToDos;
	saveLocalStorageToDos();
}

function saveLocalStorageToDos() {
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(id, text) {
	const li = document.createElement("li");
	const delBtn = document.createElement("button");

	delBtn.innerText = "❌";
	delBtn.style.background = "transparent";
	delBtn.style.border = "none";
	delBtn.addEventListener("click", deleteToDos);

	const span = document.createElement("span");
	span.innerText = text;

	li.appendChild(delBtn);
	li.appendChild(span);
	li.id = id;
	toDoList.appendChild(li);
	const toDoObj = {
		text: text,
		id: id
	};
	toDos.push(toDoObj);
	saveLocalStorageToDos();
}

function handleSubmit(event) {
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(new Date().getTime(), currentValue);
	toDoInput.value = "";
}

function loadToDos() {
	const loadedToDos = localStorage.getItem(TODOS_LS);
	if (loadedToDos !== null) {
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach(function (toDo) {
			paintToDo(toDo.id, toDo.text);
		});
	}
}

function init() {
	loadToDos();
	toDoForm.addEventListener("submit", handleSubmit);
}
init();