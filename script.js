let form =
document.getElementById("surveyForm");

let list =
document.getElementById("list");

form.addEventListener(
"submit",

function(e){

e.preventDefault();

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let phone =
document.getElementById("phone").value;

let message =
document.getElementById("message").value;

let item =
document.createElement("li");

item.innerHTML =

"Name: " + name +

"<br>Email: " + email +

"<br>Phone: " + phone +

"<br>Message: " + message;

list.appendChild(item);

form.reset();

});