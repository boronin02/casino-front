const registrationButtonNode = document.querySelector('.button__registration')
const registrationNode = document.querySelector('.js-registration')

const loginNode = document.querySelector('.login')
const passwordNode = document.querySelector('.password')
const registerButtonNode = document.querySelector('.button__register')

registrationButtonNode.addEventListener('click', registrationOpen)

function registrationOpen() {
    registrationNode.classList.add('registration_open')
}

registrationNode.addEventListener('click', function (event) {
    if (!event.target.closest('.registration__content')) {
        registrationNode.classList.remove('registration_open')
    }
})

registerButtonNode.addEventListener('click', function () {
    let login = loginNode.value
    let password = passwordNode.value

    const dataToSend = {
        login,
        password,
    };

    fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
})