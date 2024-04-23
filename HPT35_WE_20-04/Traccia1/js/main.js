let domanda = parseInt(prompt(`Indovina il numero compreso tra 1 e 100.
Hai 5 tentativi a disposizione.`));

let num = Math.floor(Math.random() * 100 + 1);

let guess_num;

function random(guess_num, num)  {

    let tries;

    for (let i = 0; i < 4; i++) {

        if (guess_num == num) {
        console.log(`Numero indovinato, era il numero ${num}`);
        i = 5;
        tries = 0;

        } else if (guess_num < num) {
            console.log(`Il numero scelto "${guess_num}" è sbagliato, il numero da indovinare è più grande`);
            guess_num = parseInt(prompt("Riprova"));

        } else if (guess_num > num) {
            console.log(`Il numero scelto "${guess_num}" è sbagliato, il numero da indovinare è più piccolo`);
            guess_num = parseInt(prompt("Riprova"));

        }

    }
    if (tries!=0){
        console.log(`Hai finito i tentativi. Il numero da indovinare era il numero "${num}"`);
    }
};

random (domanda, num);