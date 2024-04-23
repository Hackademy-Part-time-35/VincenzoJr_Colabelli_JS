let domanda = parseInt(prompt(`Inserisci la temperatura da convertire da °C a °F`));

function calcolo(domanda) {
    let calcolo = (domanda * 1.8) + 32
    
    return calcolo;
}

console.log (`${calcolo(domanda)} °F`);