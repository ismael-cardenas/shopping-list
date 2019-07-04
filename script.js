var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

liClick();
createDeleteButton();

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	liClick();
	createDeleteButton();

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function liClick(){
	for(var i = 0; i < li.length; i++) {
	li[i].addEventListener('click', changeClass)
	}
}

function changeClass(){
	console.log(this);
	this.classList.toggle('done');
}

function createDeleteButton(){
	for(var i = 0; i < li.length; i++) {
		var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("Delete"));
		li[i].appendChild(deleteButton);

	}
}
