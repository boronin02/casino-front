const registrationButtonNode = document.querySelector('.button__registration');
const registrationNode = document.querySelector('.js-registration');

const regNameNode = document.querySelector('.registration__name');
const regLoginNode = document.querySelector('.registration__login');
const regPasswordNode = document.querySelector('.registration__password');
const regPasswordAgainNode = document.querySelector('.registration__password-again');

const registerButtonNode = document.querySelector('.button__register');

registrationButtonNode.addEventListener('click', toggleRegistration);
registrationNode.addEventListener('click', handleClickOutside);
registerButtonNode.addEventListener('click', handleRegister);

function toggleRegistration() {
    registrationNode.classList.toggle('registration_open');
}

function handleClickOutside(event) {
    if (!event.target.closest('.registration__content')) {
        registrationNode.classList.remove('registration_open');
    }
}

function handleRegister() {
    const dataToSend = {
        name: regNameNode.value,
        //login: regLoginNode.value,
        password: regPasswordNode.value,
        //password_again: regPasswordAgainNode.value,
    };

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
