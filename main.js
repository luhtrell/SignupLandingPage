const firstName = document.getElementById('firstName');
const form = document.getElementById('form');
const button = document.getElementById('button');
const errorElement = document.getElementById('firstErr')

form.addEventListener("submit", (e) => {
    let messages = []
    if(firstName.value === '' || firstName.value == null) {
        messages.push('First Name cannot be empty')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    e.preventDefault()
})

// function validateForm() {
//     var firstName = document.signup.first.value;
//     var lastName = document.signup.last.value;
//     var email = document.signup.email.value;
//     var password = document.signup.pass.value;
// }

// var firstErr = lastErr = emailErr = passErr = true;

// if(firstName==null || firstName=="") {
//     alert("Name can't be blank");
//     return false;
// }