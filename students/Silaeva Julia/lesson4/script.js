'use strict'

class  ReplacementText {
    constructor(container = '.direct') {
        this.container = container;
        this.changeText();  
    }
    changeText(){
        const data = document.querySelector(this.container);
        
        let first = /'/g;     
        let second = data.innerHTML.replace((first),'"');   

        first = /\b"\b/g;
        second = second.replace((first),'\'');       
        data.innerHTML = second;
    }
 
}

const replacementText = new ReplacementText();
replacementText.changeText();