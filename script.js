console.log('Hello!');

// Datatyper & Variabler
const userName = "Thomas"; // String
// const userAge = 32; // number
let userPresent









// 
// 

/* Setter opp en funksjon med navnet clickButton som tar en blokk med kode som skal gjøres samtidig */
function clickButton() { 
/* Lager en variabel med navnet h1Element som henter et element fra HTML med id-navn changeText */
const h1Element = document.getElementById("changeText") // document.querySelector("#changeText");
/* Logger variablen h1Element til console for å sjekke at vi hentet riktig HTML element */
console.log(h1Element);

/*Lager en variabel med navnet newText som lager en string med tekst */
const newText = "Velkommen til min side";

/*Variablen h1Element for tekst innhold fra variablen newText */
h1Element.textContent = newText;
}

// 

/*Lager et variabel med navnet buttonElement som henter et element fra HTML med id-navn button. Og logger buttonElement til console for å se om det er riktig */
const buttonElement = document.getElementById("button");
console.log(buttonElement);

/*Bruker variablen buttonElement for å logge til en hendelse lytter som lytter etter et klikk og kjører funksjonen clickButton */
buttonElement.addEventListener("click", clickButton);

/*function ?() { 
    const ? = document.getElementById("?");
    const ? = "?";

    ?.textContent = ?;
}*/

// 
// 

const addText = document.getElementById("addText");
console.log(addText);

addText.addEventListener("click", function (){ 
    console.log("button clicked?")

    // steg 1: Lag en variabel som henter elementet med id-navn receiveText
    const receiveText = document.getElementById("receiveText");
    // steg 2: Lag en variabel som heter text med en string med valgfri text
    const text = "Det er sol i Bergen i dag";
    // steg 3: Gjør at variabel receiveText motar innholdet til text med textContent
    receiveText.textContent = text;
});