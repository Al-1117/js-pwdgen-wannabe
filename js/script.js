//presentazione
var intro = prompt ("Ciao! di seguito creamo insieme una password supercomplicata! Clicca su OK per proseguire :-)")

//chiedo il nome all'utente
var userName = prompt("Qual'è il tuo nome?");

//chiedo il cognome all'utente
var userSurname = prompt("Qual'è il tuo cognome?");

//chiedo il colore preferito
var userFavouriteColour = prompt("Qual'è il tuo colore preferito?");

//password generata

var generatedPassword = userName + userSurname + userFavouriteColour + "19";


//password che apparirà nella pagina
document.getElementById("password").innerHTML = generatedPassword;


//outro

document.getElementById("outro").innerHTML = ("Complimenti! Hai appena creato la tua insicurissima password!");



// document.getElementById("testo").innerHTML=myString;

// var nome = prompt("Come ti chiami?")
// // console.log(myString);
