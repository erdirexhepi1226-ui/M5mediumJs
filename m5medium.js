function check() {
    var username = document.getElementById("username").value;
    var age = document.getElementById("age").value;

    var nameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    var ageRegex = /^[0-9]+$/;

    if (!nameRegex.test(username)) {
        document.getElementById("result").innerHTML = "Invalid username!";
    }
    else if (!ageRegex.test(age)) {
        document.getElementById("error").innerHTML = "Numbers only!";
    }
    else {
        document.getElementById("result").innerHTML = "Valid username and age!";
        document.getElementById("error").innerHTML = "";
    }
}