
let valutaIniziale = prompt(`Inserisci la valuta da convertire: Euro, Dollari o Sterline`);
let valutaFinale = prompt(`Inserisci la valuta in cui vuoi convertirla: Euro, Dollari o Sterline`);
let importo = parseInt(prompt(`Inserisci l'importo da convertire:`));

function conv(a, b, c) {

    if (a == `Euro`) {

        if (b == `Dollari`) {
            importo_finale = 1.06 * c;
            console.log(`${c} € sono ${importo_finale} $`);
        } else if ( b == `Sterline`) {
            importo_finale = 0.86 * c;
            console.log(`${c} € sono ${importo_finale} £`);
        }

    } else if (a == `Dollari`) {

         if (b == `Euro`) {
            importo_finale = 0.94 * c;
            console.log(`${c} $ sono ${importo_finale} €`);
        } else if ( b == `Sterline`) {
            importo_finale = 0.81 * c;
            console.log(`${c} $ sono ${importo_finale} £`);
        }
    
    } else if (a == `Sterline`) {

        if (b == `Euro`) {
            importo_finale = 1.16 * c;
            console.log(`${c} £ sono ${importo_finale} €`);
        } else if ( b == `Dollari`) {
            importo_finale = 1.23 * c;
            console.log(`${c} £ sono ${importo_finale} $`);
        }
    }
};

conv(valutaIniziale, valutaFinale, importo)


