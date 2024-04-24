// Benissimo, notoa  anche che scrivi codice molto pulito, anche su gli altri esercizi
let incassi_giornalieri = [498, 453, 445, 525, 744, 1134, 1215];

console.log(incassi_giornalieri);

let iva_incassi = [];

incassi_giornalieri.forEach ((a) => {

    let calc = a * 0.22;
    iva_incassi.push(calc);

})

console.log(iva_incassi);