//jsnack2
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

const nArray = parseInt(prompt("Quanti array vuoi generare?"));
const container = document.querySelector(".container");

for (let i = 0; i < nArray; i++) {
    const newArray = [];

    for (let p = 0; p < 10; p++) {
        const newValue = Math.floor(Math.random() * 100 + 1)
        newArray.push(newValue);
    }

    console.log(newArray);
    const newElement = document.createElement("div");
    newElement.innerHTML = [...newArray];
    container.append(newElement);
}