const registrationButtonNode = document.querySelector('.button__registration')
const registrationNode = document.querySelector('.js-registration')

registrationButtonNode.addEventListener('click', registrationOpen)

function registrationOpen() {
    registrationNode.classList.add('registration_open')
}

registrationNode.addEventListener('click', function (event) {
    if (!event.target.closest('.registration__content')) {
        registrationNode.classList.remove('registration_open')
    }
})