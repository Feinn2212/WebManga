
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const tel = document.getElementById('tel');
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


    function onlyNumberKey(evt) {
          
        // Only ASCII character in that range allowed
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            return false;
        return true;
    }

    if(tel.value.length <= 7){
        alert("Phone number must be longer than 7 characters");
    }
    else{
        
    }

    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
})

