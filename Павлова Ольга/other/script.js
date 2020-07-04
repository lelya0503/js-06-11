function form() {
    var regName = /^[a-zа-яё]+$/gi,
        regEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/,
        regPhone = /^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}(-\d{2}){2}$/,
        regMessage = /[a-zа-яё0-9]/;

    let name = document.getElementsByName('name')[0].value,
        email = document.getElementsByName('email')[0].value,
        phone = document.getElementsByName('phone')[0].value,
        message = document.getElementsByName('message')[0].value;

    // Проверка имени
    if(regName.test(name) === true) {
        document.getElementById('name').className = 'right';
    } else {
        document.getElementById('name').className = 'error';
    }
    // Проверка телефона
    if(regPhone.test(phone) === true) {
        document.getElementById('phone').className = 'right';
    } else {
        document.getElementById('phone').className = 'error';
    }
    // Проверка email
    if(regEmail.test(email) === true) {
        document.getElementById('email').className = 'right';
    } else {
        document.getElementById('email').className = 'error';
    }
    // Проверка сообщения
    if(regMessage.test(message) === true) {
        document.getElementById('message').className = 'right';
    } else {
        document.getElementById('message').className = 'error';
    }
}
document.querySelector('.button').addEventListener("click", valideForm);