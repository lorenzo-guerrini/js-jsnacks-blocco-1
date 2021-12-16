//jsnack3
// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

//Generatore di casuale di array di numeri da 1 a 100 con numeri da 1 a 100
const numeri = [];
const nNumeri = Math.floor(Math.random() * 100 + 1);

for (let i = 0; i < nNumeri; i++) {
    const newNumber = Math.floor(Math.random() * 100 + 1);
    numeri.push(newNumber);
}

// Rosso = numeri pari
// Verde = numeri dispari
const rosso = document.getElementById("rosso");
const verde = document.getElementById("verde");

document.getElementById("info").innerHTML = "Sono stati generati " + nNumeri + " numeri";

for (let i = 0; i < numeri.length; i++) {
    let valore = numeri[i];
    if (valore % 2 == 0) {
        rosso.innerHTML += valore + " ";
    } else {
        verde.innerHTML += valore + " ";
    }
}