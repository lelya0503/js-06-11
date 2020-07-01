/*1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.
2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.
*/

class CorrectText {
    constructor(container = '.text') {
        this.container = container;
        this.getText();
    }

    getText() {
        const text = document.querySelector(this.container);

        let rex = /'/g;
        let res = text.innerHTML.replace((rex), '"');

        rex = /\b"\b/g;
        res = res.replace((rex), '\'');
        text.innerHTML = res;
    }
}

const correctText = new CorrectText();
correctText.getText();

/**
 * 3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить. При нажатии на кнопку Отправить 
 * произвести валидацию полей следующим образом:
 */


class ContactForm {
    constructor (container = '.formBox') {
        this.container = container;
        this.userName = [];
        this.userPhone = [];
        this.userEmail = [];

        this.init();
    }

    validName(value) {
        let rex = /[А-Яа-яЁёA-Za-z]/g;
        this.userName = value.match(rex);
        console.log(this.userName);
    }

    validPhone(value) {
        let rex = /\d+/g;
        this.userPhone = value.match(rex)
        console.log(this.userPhone);
    }

    validEmail(value) {
        let rex = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
        this.userEmail = value.match(rex);
        console.log(this.userEmail);
    }

    addError() {
        let error = 'Ошибка при заполнении';

        if(this.userName === null){
            document.querySelector('.userName').classList.add('form_error');
            document.querySelector('.text_error').textContent = error;
        }else{
            document.querySelector('.userName').classList.remove('form_error');
            document.querySelector('.text_error').textContent = null;
        }
        if(this.userPhone === null){
            document.querySelector('.userPhone').classList.add('form_error');
            document.querySelector('.text_error').textContent = error;
        }else{
            document.querySelector('.userPhone').classList.remove('form_error');
            document.querySelector('.text_error').textContent = null;
        }if(this.userEmail === null){
            document.querySelector('.userEmail').classList.add('form_error');
            document.querySelector('.text_error').textContent = error;
        }else{
            document.querySelector('.userEmail').classList.remove('form_error');
            document.querySelector('.text_error').textContent = null;
        }
    }

    init() {
        document.querySelector('.formBox').addEventListener('submit', event => {
            event.preventDefault();
            this.validName(document.querySelector('.userName').value);
            this.validPhone(document.querySelector('.userPhone').value);
            this.validEmail(document.querySelector('.userEmail').value);
            this.addError();
        });
    }
}

const form = new ContactForm();
