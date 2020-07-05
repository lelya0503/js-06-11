// Задание 1-2
document.getElementById("changebtn").addEventListener("click", changeText);

function changeText() {
    const text = document.querySelector(".text").innerText;
    document.querySelector(".text").innerText = text
        .replace(/[ ]'/gm,' "')
        .replace(/'[ ]/gm,'" ')
        .replace(/[.]'/gm,'."')
        .replace(/'[.]/gm,'"/.');
}
// Задание 3
document.getElementById("sendbtn").addEventListener("click", validate);

function validate() {
    const nameRegex = /^[а-яА-ЯЁёa-zA-Z\s]+$/;
    const name = document.getElementById("name");
    checkInput(name, nameRegex);

    const phoneRegex = /\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
    const phone = document.getElementById("phone");
    checkInput(phone, phoneRegex);

    const emailRegex = /[a-zA-Z0-9_\-]+(\.[a-zA-Z0-9_\-]+)*@([a-zA-Z0-9]+\.)+[a-zA-Z]+$/;
    // В общем я написал какой-то свой вариант. Понимаю, что лучше брать из интернета, где regex будет точнее.
    // Но вряд ли задание состояло в этом :)
    const email = document.getElementById("email");
    checkInput(email, emailRegex);

    const emailIsWrong = email.classList.contains("input_wrong");
    const phoneIsWrong = phone.classList.contains("input_wrong");
    const nameIsWrong = name.classList.contains("input_wrong");

    if (nameIsWrong  || phoneIsWrong  || emailIsWrong) {
        document.querySelector(".error").style.display = "block";
    } else {
        document.querySelector(".error").style.display = "none";
    }
}
function checkInput(element, regex) {
    if (regex.test(element.value)) {
        element.classList.remove("input_wrong");
    } else {
        element.classList.add("input_wrong");
    }
}