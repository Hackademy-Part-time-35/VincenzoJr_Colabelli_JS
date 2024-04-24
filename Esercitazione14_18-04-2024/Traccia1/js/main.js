// Bene vincenzo, hai fatto benissimo a utilizzare entrambi i metodi, è sempre un'ottima cosa allenarsi e sperimentarsi
let numeri_decrescenti = [13, 22, 10, 33, 23, 66, 1, 6, 44, 40];

numeri_decrescenti.sort( (a, b) => b - a );

console.log(numeri_decrescenti);



let numeri_crescenti = [45, 34, 77, 2, 90, 11, 1, 76, 13, 22, 10, 33, 23, 66, 111, 6, 44, 40, 53, 32];

numeri_crescenti.sort(fun);

function fun(a, b) {
    let numeri_ordinati = a - b;
    
    return numeri_ordinati;
}

console.log(numeri_crescenti);

// Ho voluto utilizzare entrambi i metodi, il  più semplificato e quello più macchinoso