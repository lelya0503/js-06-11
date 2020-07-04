"use strict";

let form = document.forms.formWrap;

let elemName = form.elements.formName;

function checkRight() {
    if (elemName.value === "Имя") {
      console.log("done");
    } else {
      console.log("error");
    }
  }
  

let submit = document.getElementById('submit');

submit.addEventListener("click", checkRight);

