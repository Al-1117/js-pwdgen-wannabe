//presentazione
alert("Ciao! Di seguito creamo insieme una password supercomplicata! Clicca su OK per proseguire :-)");

//chiedo il nome all'utente
var userName = prompt("Qual'è il tuo nome?");

//chiedo il cognome all'utente
var userSurname = prompt("Qual'è il tuo cognome?");

//chiedo il colore preferito
var userFavouriteColour = prompt("Qual'è il tuo colore preferito?");


// dicianove
var dieci = 10;
var nove = 9;
var dicianove = dieci + nove;

//password generata

var generatedPassword = userName + userSurname + userFavouriteColour + dicianove;


//password che apparirà nella pagina
document.getElementById("password").innerHTML = generatedPassword;


//outro

document.getElementById("outro").innerHTML = ("Complimenti! Hai appena creato la tua insicurissima password!");


// // dicianove
// var dieci = 10;
// var nove = 9;
// var dicianove = dieci + nove;
// console.log(dicianove);
// document.getElementById("testo").innerHTML=myString;

// var nome = prompt("Come ti chiami?")
// // console.log(myString);
