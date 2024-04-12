
let num_bevanda = parseInt(prompt(`Inserisci il numero della bevanda che preferisci`));

let scelta = true;

while (scelta){
switch (num_bevanda) {
    case 1:
        console.log(`E' stata scelta l'acqua`);
        scelta = false;
        break;
    case 2:
        console.log(`E' stata scelta la Coca Cola`);
        scelta = false;
        break;
    case 3:
        console.log(`E' stata scelta la birra`);
        scelta = false;
        break;
    
    default:
        console.log(`Inserimento errato, riprova.`);
        num_bevanda = parseInt(prompt(`Inserisci il numero della bevanda che preferisci`));
        continue;        
    }
}
        

