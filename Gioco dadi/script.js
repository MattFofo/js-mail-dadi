// - Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// - Stabilire il vincitore, in base a chi fa il punteggio più alto.



// array con valori dado

const arrDieFaces = [1, 2, 3, 4, 5, 6];

console.log(arrDieFaces);
console.log(arrDieFaces.length);


// funzione per selezionare un valore casuale dell'arrey
// console.log(Math.floor(Math.random() * arrDieFaces.length) + 1);


let numberPlayer = (Math.floor(Math.random() * arrDieFaces.length) + 1);
let numberPC = (Math.floor(Math.random() * arrDieFaces.length) + 1);

console.log('numero giocatore', numberPlayer);
console.log('numero PC', numberPC);


if (numberPlayer > numberPC) {
    console.log('Hai Vinto');
    
}else if (numberPlayer == numberPC) {
    console.log('pareggio');

}else {
    console.log('Hai diversamente vinto');
}


