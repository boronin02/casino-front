const registrationButtonNode = document.querySelector('.button__registration');
const registrationNode = document.querySelector('.js-registration');

const regNameNode = document.querySelector('.registration__name');
const regLoginNode = document.querySelector('.registration__login');
const regPasswordNode = document.querySelector('.registration__password');
const regPasswordAgainNode = document.querySelector('.registration__password-again');
const errorNode = document.querySelector('.error');

const regEasswordError = document.querySelector('.registration__password-error')

const registerButtonNode = document.querySelector('.button__register');

registrationButtonNode.addEventListener('click', toggleRegistration);
registrationNode.addEventListener('click', handleClickOutside);
registerButtonNode.addEventListener('click', handleRegister);

function toggleRegistration() {
    registrationNode.classList.toggle('registration_open');
}

function handleClickOutside(event) {
    if (!event.target.closest('.registration__form') && !event.target.closest('.button__register')) {
        registrationNode.classList.remove('registration_open');
    }
}


function handleRegister(event) {
    event.preventDefault();
    const dataToSend = {
        name: regNameNode.value,
        login: regLoginNode.value,
        password: regPasswordNode.value,
        password_again: regPasswordAgainNode.value,
    };

    if (!passwordVerification()) {
        return
    }

    fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data.status === 'error') {
                errorNode.innerText = `Пользователь с таким логином уже существует`
            }
            if (data.status === 'success') {
                registrationNode.classList.remove('registration_open');
            }
        })
        .catch(error => {
            console.error('Error:', error);

        });
}

// clearInputs();
// function clearInputs() {
//     regNameNode.value = "";
//     regLoginNode.value = "";
//     regPasswordNode.value = "";
//     regPasswordAgainNode.value = "";
// }

function passwordVerification() {
    if (regPasswordNode.value !== regPasswordAgainNode.value) {
        regEasswordError.classList.add('registration__password-error_open')
        return false
    }
    regEasswordError.classList.remove('registration__password-error_open')
    return true
}