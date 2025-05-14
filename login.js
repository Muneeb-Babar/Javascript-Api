
function onSignIn(){
    var inputs=document.getElementsByTagName("input");
    var email=inputs[0].value;
    var password=inputs[1].value;

    if(!email || !password){
        alert("Please fill in all fields");
        return
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
    }
    
    if(password.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
    }

    var getUsers= JSON.parse(localStorage.getItem("users"));
    var userFound=false;

    for(var i=0; i<getUsers.length; i++){
        if(getUsers[i].email===email && getUsers[i].password===password){
            alert("User logged in successfully");
            userFound=true;
            window.location.href="./index.html";
            break;
            
        }
    }
    if(!userFound){
        alert("Invalid email or password");
        return;
    }
}