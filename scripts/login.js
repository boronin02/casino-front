const loginNode = document.querySelector('.js-login');
const loginButtonOpenNode = document.querySelector('.header__content-right-text');
const loginButtonNode = document.querySelector('.button__login');

const logLoginNode = document.querySelector('.login__login');
const logPasswordNode = document.querySelector('.login__password');

const logAndRegNode = document.querySelector('.log-and-reg');

const accountName = document.querySelector('.account-name');


// Открытие окна логина при клике на кнопку
loginButtonOpenNode.addEventListener('click', loginOpen);

function loginOpen() {
    loginNode.classList.add('login_open');
}

// Закрытие окна логина при клике вне области окна
loginNode.addEventListener('click', function (event) {
    if (!event.target.closest('.login__content')) {
        loginNode.classList.remove('login_open');
    }
});

// Обработчик клика на кнопку логина
loginButtonNode.addEventListener('click', function (event) {
    event.preventDefault();

    // Данные для отправки на сервер
    const dataToSend = {
        login: logLoginNode.value,
        password: logPasswordNode.value,
    };

    // Отправка данных через fetch
    fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                // Скрытие окна логина и показ аккаунта
                loginNode.classList.remove('login_open');
                logAndRegNode.classList.add('log-and-reg_close');
                account.classList.add('account_open');
                console.log(data)
                // Отображение логина пользователя
                accountName.innerText = data.login.login;
                userPassword = data.login.password
            } else {
                console.error('Login failed:', data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});