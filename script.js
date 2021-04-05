// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseenter", function() {
// 	console.log("CLICK!!!");
// })

var input = document.getElementById("userinput");
var enterBtn = document.getElementById("enter");
var ul = document.querySelector("ul");

getListItems();

enterBtn.addEventListener("click", clickFunction);

input.addEventListener("keypress", keypressFunction);

function getListItems(){
	var items = document.querySelectorAll("li");
	for(var i = 0; i < items.length; i++){
		items[i].addEventListener("click", toggleDone)
		addDeleteButton(items[i]);
	}
}


function toggleDone(){
	this.classList.toggle("done");
}

//From here
function addDeleteButton(li){
	var delBtn = document.createElement("button");
	delBtn.textContent = " Delete";
	li.appendChild(delBtn);
	delBtn.addEventListener("click", deleteItem); 
}

function deleteItem(){
	ul.removeChild(this.parentNode);

}

function clickFunction(){
	if(inputLength() > 0){
		createListElement();
	}

}

function keypressFunction(event){
	if(inputLength() > 0 && event.keyCode == 13){
		createListElement();
	}

}

function inputLength(){
	return input.value.length;
}


function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	addDeleteButton(li);
	li.addEventListener("click", toggleDone);
}


// function addListAfterClick() {
// 		if (inputLength() > 0){
// 			createListElement();
// 	}
// }

// function addListAfterKeypress(){
// 	if (inputLength() > 0 && event.keyCode === 13){
// 		createListElement();
// 	}
// }


// button.addEventListener("click", addListAfterClick)

	

