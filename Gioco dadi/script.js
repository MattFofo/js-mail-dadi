// - Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// - Stabilire il vincitore, in base a chi fa il punteggio più alto.




// array con valori dado
const arrDieFaces = [1, 2, 3, 4, 5, 6];

const startBtn = document.querySelector("#start");




// funzione per selezionare un valore casuale dell'arrey
// console.log(Math.floor(Math.random() * arrDieFaces.length) + 1);
// Math.random() * 6 + 1 --> per generare numeri casuali tra 1 e 6 compresi



startBtn.addEventListener('click', function () {

    let numberPlayerBox = document.querySelector(".number-player-box");
    console.log(numberPlayerBox);
    let numberPcBox = document.querySelector(".number-pc-box");
    let output = document.querySelector('.output');

    let numberPlayer = (Math.floor(Math.random() * arrDieFaces.length) + 1);
    let numberPC = (Math.floor(Math.random() * arrDieFaces.length) + 1);

    console.log('numero giocatore', numberPlayer);
    console.log('numero PC', numberPC);

    numberPlayerBox.innerHTML = numberPlayer;
    numberPcBox.innerHTML = numberPC;

    if (numberPlayer > numberPC) {
        output.innerHTML = 'Hai vinto';
    
    }else if (numberPlayer == numberPC) {
        output.innerHTML = 'Pareggio';

    }else {
        output.innerHTML = 'Hai perso';
    }

    
})