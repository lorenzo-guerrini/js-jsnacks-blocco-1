//jsnack1
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

const myArray = [];
let somma = 0;

do {
    const input = parseInt(prompt("Inserisci un numero"));
    somma += input;

    myArray.push(input);
} while (somma < 50);

console.log(somma);
console.log(myArray);