
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const number = document.getElementById('number');
const form = document.getElementById('form');
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {

    let messages = [];
    if(password.value.length <= 5){
        alert('Password must be longer than 5 characters');
    }

    if(password.value.length >= 20){
        alert('Password must be less than 20 characters');

    }

    if(password.value != passwordConfirm.value){
        alert("Password does not match!");
    }

    if(number.value.length <= 10  ||  number.value.length >= 13){
        alert("Phone number must be between 11 and 13 characters");
    }

    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
})

