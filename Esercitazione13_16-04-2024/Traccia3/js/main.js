
// Bene, ottimo lavoro 
let numero = parseInt(prompt(`Inserisci un numero, e ti dico da quante cifre è composto:`));

function calcolo(numero) {  

    if (numero <= 9){
        console.log(`Il numero è composto da 1 cifra`);
    } else if (numero <= 99) {
        console.log(`Il numero è composto da 2 cifre`);
    } else if (numero <= 999) {
        console.log(`Il numero è composto da 3 cifre`);
    } else if (numero <= 9999) {
        console.log(`Il numero è composto da 4 cifre`);
    } else {
        console.log(`Numero troppo grande`);
    }
}

calcolo(numero);