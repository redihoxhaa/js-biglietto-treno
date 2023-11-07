const pricePerKm = 0.21;
const discount18 = 0.2;
const discount65 = 0.4;
const userKm = parseInt(prompt("Inserisci i km che desideri percorrere"));
const userAge = parseInt(prompt("Inserisci la tua età"));
let ticketPrice = userKm * pricePerKm;

if (userAge < 18) {
    ticketPrice = ticketPrice - (ticketPrice * discount18);
    console.log("Il prezzo del tuo biglietto è: " + ticketPrice.toFixed(2));
} else if (userAge >= 65) {
    ticketPrice = ticketPrice - (ticketPrice * discount65);
    console.log("Il prezzo del tuo biglietto è: " + ticketPrice.toFixed(2));
} else {
    console.log("Il prezzo del tuo biglietto è: " + ticketPrice.toFixed(2));
}