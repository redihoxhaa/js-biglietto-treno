const userKm = parseInt(prompt("Inserisci i km che desideri percorrere"));
const userAge = parseInt(prompt("Inserisci la tua età"));
let ticketPrice = userKm * 0.21;

if (userAge < 18) {
    ticketPrice = ticketPrice - (ticketPrice * 0.2);
    console.log("Il prezzo del tuo biglietto è: " + ticketPrice.toFixed(2));
} else if (userAge >= 65) {
    ticketPrice = ticketPrice - (ticketPrice * 0.4);
    console.log("Il prezzo del tuo biglietto è: " + ticketPrice.toFixed(2));
} else {
    console.log("Il prezzo del tuo biglietto è: " + ticketPrice.toFixed(2));
}