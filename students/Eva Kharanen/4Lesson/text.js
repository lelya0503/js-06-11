
let text = 'Прямая речь представляет собой речь, которая передается буквально от определенного лица.\n' +
    '\n' +
    'Например: She told me, “Mark, I want you to go with me.”\n' +
    '\n' +
    'или: “How are you?” he asked his friend.\n' +
    '\n' +
    'Для правильного оформления прямой речи необходимо знать некоторые правила, которых не так уж и много.\n' +
    '\n' +
    'Прямая речь, как правило, помещается в кавычки, а также сопровождается глаголом, который используется для того, чтобы показать, что что-то цитируется. Например, к таким глаголам относятся слова: сказать, отвечать, говорить, спрашивать и т.д.\n' +
    '\n' +
    'Самый простой случай оформления прямой речи следующий:\n' +
    '\n' +
    'I told her, “Help me, my darling.”\n' +
    '\n' +
    'They asked their teacher, “When are you going to leave us?”\n' +
    '\n' +
    '"Do you like this movie?" she asked';

document.querySelector('.text').innerHTML = text;

function replace() {
    let text2 = text.replace(/\B”|”\B/g, '"');
    text = text2
    return document.querySelector('.text').innerHTML = text;
}
function replace2() {
    let text3 = text.replace(/\B“|“\B/g, '"');
    text = text3
    return document.querySelector('.text').innerHTML = text;
}


const input_fields = {
    username: /^[a-z\d]{5,20}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    telephone:/^\d{11}$/,
}
const validate = (field, regex) => {
    regex.test(field.value) ? field.className = 'valid' : field.className = 'invalid';
}
let keys = document.querySelectorAll('input');

keys.forEach(item => item.addEventListener(
    'keyup', e => {
        validate(e.target, input_fields[e.target.attributes.name.value])
    }
));
e.target.attributes.name.value