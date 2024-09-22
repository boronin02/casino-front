loginButtonOpenNode.addEventListener('click', loginOpen)

function loginOpen() {
    loginNode.classList.add('login_open')
}

loginNode.addEventListener('click', function (event) {
    if (!event.target.closest('.login__content')) {
        loginNode.classList.remove('login_open')
    }
})