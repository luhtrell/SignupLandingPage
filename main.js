const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName')
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const button = document.getElementById('button');
const errorElementFirst = document.getElementById('firstErr')
const errorElementSecond = document.getElementById('lastErr')
const errorElementThird = document.getElementById('emailErr')
const errorElementFourth = document.getElementById('passErr')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(checkInputs()) {
        form.submit();
    }
});

function checkInputs() {
    const firstNamevalue = firstName.value.trim();
    const lastNamevalue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstNamevalue === '') {
        errorElementFirst.innerText = 'First Name cannot be empty';
    } else {
        errorElementFirst.innerText = '';
        
    }

    if(lastNamevalue === '') {
        errorElementSecond.innerText = 'Last Name cannot be empty';
    } else {
        errorElementSecond.innerText = '';
        
    }

    if(emailValue === '') {
        errorElementThird.innerText = 'Looks like this is not a email';
    } else {
        errorElementThird.innerText = '';
        
    }

    if(passwordValue === '') {
        errorElementFourth.innerText = 'Password cannot be empty';
    } else {
        errorElementFourth.innerText = '';
        
    }
}

// function setErrorFor(input,message) {
//     errorElementFirst.innerText = message;
// }

// function setSuccessFor(input) {
    
// }


// form.addEventListener("submit", (e) => {
//     let messages = []
//     if(firstName.value === '' || firstName.value == null) {
//         messages.push('First Name cannot be empty')
//     }

//     if (messages.length > 0) {
//         e.preventDefault()
//         errorElementFirst.innerText = messages.join(', ')
//     }
//     e.preventDefault()
// })

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