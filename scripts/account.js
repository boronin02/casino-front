const account = document.querySelector('.account');
const accountWindow = document.querySelector('.js-account__window');
const accountIdText = document.querySelector('.account__id-text')
const accountLoginText = document.querySelector('.account__login-text');
const accountNameText = document.querySelector('.account__name-text')
const accountPasswordText = document.querySelector('.account__password-text');
const accountDataText = document.querySelector('.account__data-text')

// Добавляем обработчик клика на элемент аккаунта
account.addEventListener('click', function () {
    // Открываем окно с информацией об аккаунте
    accountWindow.classList.add('account__window_open');

    fetch(`http://127.0.0.1:5000/account?login=${userLogin}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'success') {
                accountIdText.innerText = data.account.id
                accountLoginText.innerText = data.account.login
                accountNameText.innerText = data.account.name
                accountPasswordText.innerText = '*****'
                accountDataText.innerText = data.account.created_date
            } else {
                console.error('Ошибка:', data.message);
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });

});

// Закрываем окно при клике вне области окна
accountWindow.addEventListener('click', function (event) {
    if (!event.target.closest('.account__form')) {
        // Если клик был вне формы, закрываем окно
        accountWindow.classList.remove('account__window_open');
    }
});

document.querySelector('.account__form').addEventListener('click', function (event) {
    event.stopPropagation();
});
