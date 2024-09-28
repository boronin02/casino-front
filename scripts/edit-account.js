const editAccountButton = document.querySelector('.account__edit-button')
const editAccountForm = document.querySelector('.js-account__edit')

const exitAccountButton = document.querySelector('.account__exit-button')

const editButton = document.querySelector('.button__edit')

const editNameNode = document.querySelector('.edit__name')
const editPasswordNode = document.querySelector('.edit__password')

editAccountButton.addEventListener('click', closeAccountForm)
editAccountButton.addEventListener('click', openEditForm)

exitAccountButton.addEventListener('click', exitAccount)

function exitAccount() {
    account.classList.remove('account_open');
    logAndRegNode.classList.remove('log-and-reg_close');
    accountWindow.classList.remove('account__window_open');
}

function closeAccountForm(event) {
    event.preventDefault();
    event.stopPropagation();
    accountWindow.classList.remove('account__window_open');
}

function openEditForm() {
    editAccountForm.classList.add('account__edit_open');
}

editAccountForm.addEventListener('click', function (event) {
    if (!event.target.closest('.account__form-edit')) {
        editAccountForm.classList.remove('account__edit_open');
    }
})

editButton.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    const dataToSend = {

        name: editNameNode.value,
        password: editPasswordNode.value,
    };
    fetch(`http://127.0.0.1:5000/edit_account`, {
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
        .catch(error => {
            console.error('Error:', error);

        });
})