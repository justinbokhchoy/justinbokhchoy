let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/3dramen.gif') {
        myImage.setAttribute('src', 'images/ps1.gif');
    }
    else {
        myImage.setAttribute('src', 'images/3dramen.gif');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.')
    localStorage.setItem('name', myName);
    myHeading.textContent =  'Here\'s your midnight snack, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Here\'s your midnight snack, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
