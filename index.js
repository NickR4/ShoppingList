function clickedfunction( ) {
event.preventDefault();
var itemx = document.getElementById("shopping-list-entry").value;

console.log(itemx);

alert(itemx);

 document.getElementById('reply').innerHTML = itemx;

function logSubmit(event) {






const form = document.getElementById('form');

form.addEventListener('submit', logSubmit);

}

}

