
let lancio_dadi = parseInt(prompt("Inserire il numero di tiri del dado di ogni giocatore: "));

let player1 = 0;
let player2 = 0;

function dado() {

    for (let i = 0; i < lancio_dadi; i++) {
        player1 += Math.floor(Math.random() * (6) + 1);
        player2 += Math.floor(Math.random() * (6) + 1);
    }
    
    if (player1 > player2) {
        console.log(`Il giocatore 1 vince con un totale di ${player1}`);
        console.log(`Il giocatore 2 perde con un totale di ${player2}`);
    
    } else if (player1 < player2) {
        console.log(`Il giocatore 2 vince con un totale di ${player2}`);
        console.log(`Il giocatore 1 perde con un totale di ${player1}`);

    } else {
        console.log(`Il giocatore 1 ed il giocatore 2 hanno pareggiato con un totale di ${player1}`);
    }

}

dado ();












