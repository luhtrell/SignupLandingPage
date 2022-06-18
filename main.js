function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    var firstName = document.signup.first.value;
    var lastName = document.signup.last.value;
    var email = document.signup.email.value;
    var password = document.signup.pass.value;
}

var firstErr = lastErr = emailErr = passErr = true;

if(firstName==null || firstName=="") {
    alert("Name can't be blank");
    return false;
}