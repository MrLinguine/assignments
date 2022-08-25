//Header
var header = document.querySelector ("header");

header.textContent = "Java Script Made This!!";


//Subheader 1
var subHeader1 = document.createElement("p");

var addText = document.createTextNode ("Chris");

subHeader1.appendChild(addText);

subHeader1.style.color = "green";

subHeader1.style.textAlign = "center";

subHeader1.style.fontSize = "large";

var currentDiv = document.querySelector("label");

document.body.insertBefore(subHeader1, currentDiv);

//Subheader 2

var subHeader2 = document.createElement("span");

var addText2 = document.createTextNode (" wrote this with JavaScript");

subHeader2.appendChild(addText2);

subHeader2.style.color = "black";

subHeader2.style.fontSize = "large";

subHeader1.insertAdjacentElement('beforeend', subHeader2);

//Changing the words

var textLeft1 = document.getElementsByClassName('message left') [0]

var insertText1 = "Did you know you can't say 'bubbles' in an angry tone?";

textLeft1.textContent= insertText1;

var textRight1 = document.getElementsByClassName('message right') [0];

var insertText2 = "No I didn't.";

textRight1.textContent= insertText2;

var textLeft2 = document.getElementsByClassName('message left') [1];

var insertText3 = "Give it a shot!";

textLeft2.textContent= insertText3;

var textRight2 = document.getElementsByClassName('message right') [1];

var insertText4 = "Bubbles!";

textRight2.textContent = insertText4;

//Clear button

var clearButton = document.getElementById("clear-button");

var messages = document.querySelector(".messages").childNodes;

clearButton.addEventListener("mousedown", function ()
    {
    messages.textContent = "filler"
    }
);