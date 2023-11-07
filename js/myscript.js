const pricePerKm = 0.21;
const discount18 = 0.2;
const discount65 = 0.4;
const userKm = Number(prompt("Inserisci i km che desideri percorrere"));
const userAge = Number(prompt("Inserisci la tua età"));
let ticketPrice = userKm * pricePerKm;

if (userAge < 18) {
    ticketPrice = ticketPrice - (ticketPrice * discount18);
} else if (userAge >= 65) {
    ticketPrice = ticketPrice - (ticketPrice * discount65);
}

console.log("Il prezzo del tuo biglietto è: ", Number(ticketPrice.toFixed(2)));
