
var users= JSON.parse(localStorage.getItem("users")) || [];

function onSignUp(){
    var inputs = document.getElementsByTagName("input");
    var firstName = inputs[0].value;
    var email = inputs[1].value;
    var password = inputs[2].value;


    if(!firstName || !email || !password){
    alert("Please fill in all fields");
    return
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

if(!emailRegex.test(email)){
    alert("Please enter a valid email address");
    return
}

if(password.length < 8){
    alert("Password must be at least 8 characters long");
    return
}

var user={
    firstName: firstName,
    email: email,
    password: password
}

users.push(user);
localStorage.setItem("users", JSON.stringify(users));
alert("User signed up successfully");
window.location.href = "./login.html";

}