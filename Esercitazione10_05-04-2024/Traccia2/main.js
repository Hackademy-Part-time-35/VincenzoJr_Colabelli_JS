let current_year = 2024;
let birth_year = 1972;

let years_old = current_year - birth_year;
let years_left = 100 - years_old;

console.log(`Hai ${years_old} e ti mancano ${years_left} per compierne 100`);

// Molto bene
// L'unica osservazione, anche se l'esercizio genera pochissimo codice:
// hai dichiarato due variabili a cui hai assegnato direttamente il valore attraverso un calco aritmetico
// é certamente più leggibile questo:

/*  
let years_old;
years_old = current_year - birth_year;

let years_left;
years_left = 100 - years_old;
*/




