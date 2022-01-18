
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('passwordConfirm')
const tel = document.getElementById('tel')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    let messages =[]
    if(password.value.lenght <= 6){
        messages.push('Password must be longer than 6 characters')
    }

    if(password.value.lenght >= 20){
        messages.push('Password must be less than 20 characters')
    }

    if(messages.lenght > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})

