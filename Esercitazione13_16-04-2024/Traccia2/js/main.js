
let numero = parseInt(prompt(`Inserisci fino a che numero devo mostrarti:`));

function calcolo(n) {
    for (let i = 1; i <= n; i++) {

     if (i % 15 == 0)  {
        console.log(`fizzBuzz`);

    } else if (i % 5 == 0) {
        console.log(`Buzz`);

    } else if ( i % 3 == 0) {
        console.log(`Fizz`);

    } else {
        console.log(i);

        }
    }
}

calcolo(numero);
