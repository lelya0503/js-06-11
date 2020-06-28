const text = "She told me I love you! The people cried 'Look out! Be carefull!' I though 'Why not going to the cinema this evening' The boy wispered 'What are you doing here?' The receptionist at the hotel asked me 'Whats your phone number, sir?'My Mom informed me 'We are gouing to visit Granny on Sunday.' The road sighn tells the drivers 'The road is out of order, be attentive!' The shopgirl turned to me and asked 'Can I help you?' The teacher told strictly 'Stop talking immidiately, children!' My friends asked me 'What are you doing tomorrow? Lets go skating.' Aren't aren't ohhhh aren't.";

const regexp = /' | '/g;

console.log(text.replace(regexp, '"'));


const btn = document.querySelector('.send1');
btn.addEventListener('click', function () {
    
    let regexpName = /([А-ЯЁ][а-яё]+[\-\s]?){3,}/;
    let myName = document.getElementById('name').value;
    console.log(myName);
    if(regexpName.test(myName) == false) {
        alert('Введите корректное ФИО');  
        document.getElementById('name').backgroundColor = "red";
        return false;
    }
    
    let regexptelNumber = /\+?\d+([\(\s\-]?\d+[\)\s\-]?[\d\s\-]+)?/;
    let myTelNumber = document.getElementById('telNumber').value;
    console.log(myTelNumber);
    if(regexptelNumber.test(myTelNumber) == false) {
        alert('Введите корректный телефон');
        return false;
    }
    
    
   
    let regexpMail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
    let myMail = document.getElementById('email').value;
    console.log(myMail);
    if(regexpMail.test(myMail) == false) {
      alert('Введите корректный e-mail');
      return false;         
   }
    
   let myText = document.getElementById('text').value;
   console.log(myText);
   if(myText.length > 10) {
       alert('Введите корректное колличесво символов');
      return false;
   }
    
    
});