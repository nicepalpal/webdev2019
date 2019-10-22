var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var deleteButton = document.createElement("button")
	deleteButton.setAttribute("id", "delete-btn")
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(deleteButton)
	ul.appendChild(li);
	input.value = "";
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

function toggleDone(e){
	var event = e.target
	if (event.tagName === "LI"){
		event.classList.toggle("done");
	} else if (event.tagName === "BUTTON"){
		event.parentNode.parentNode.removeChild(event.parentNode);
	}
};

function deleteListElement(){
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleDone);
