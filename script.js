let form =
document.getElementById("surveyForm");

let list =
document.getElementById("list");

let toast =
document.getElementById("toast");

/* Store unique emails and phones */

let emails = [];

let phones = [];

form.addEventListener(
"submit",

function(e){

e.preventDefault();

/* Get values */

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let phone =
document.getElementById("phone").value;

let message =
document.getElementById("message").value;

/* Email Validation */

let emailPattern =
/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){

showToast("Invalid Email");

return;

}

/* Phone Validation */

let phonePattern =
/^[0-9]{10}$/;

if(!phone.match(phonePattern)){

showToast(
"Phone must be 10 digits"
);

return;

}

/* Unique Email */

if(emails.includes(email)){

showToast(
"Email already exists"
);

return;

}

/* Unique Phone */

if(phones.includes(phone)){

showToast(
"Phone number already exists"
);

return;

}

/* Message Word Limit */

let wordCount =
message.trim().split(/\s+/).length;

if(wordCount > 200){

showToast(
"Message exceeds 200 words"
);

return;

}

/* Save unique values */

emails.push(email);

phones.push(phone);

/* Show only first 100 chars */

let shortMessage =
message.substring(0,100);

if(message.length > 100){

shortMessage += "..............";

}

/* Create list */

let item =
document.createElement("li");

item.innerHTML =

"<b>Name:</b> " + name +

"<br><b>Email:</b> " + email +

"<br><b>Phone:</b> " + phone +

"<br><b>Message:</b> " +
shortMessage;

list.appendChild(item);

/* Success toaster */

showToast(
"Survey Submitted Successfully"
);

/* Email simulation */

console.log(
"Email Sent To:",
email
);

console.log(
"You have successfully submitted the survey."
);

/* Reset form */

form.reset();

});

/* Toaster Function */

function showToast(message){

toast.innerHTML = message;

toast.style.display = "block";

setTimeout(function(){

toast.style.display = "none";

},3000);

}
