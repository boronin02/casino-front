const account = document.querySelector('.account');
const accountWindow = document.querySelector('.js-account__window');
const accountLoginText = document.querySelector('.account__login-text');
const accountPasswordText = document.querySelector('.account__password-text');



account.addEventListener('click', function () {
    accountWindow.classList.add('account__window_open')
    accountLoginText.innerText = accountName.innerText
    accountPasswordText.innerText = userPassword
});

accountWindow.addEventListener('click', function (event) {
    if (!event.target.closest('.account__form')) {
        accountWindow.classList.remove('account__window_open');
    }
})