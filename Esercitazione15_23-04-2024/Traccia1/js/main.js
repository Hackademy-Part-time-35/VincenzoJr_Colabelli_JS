// Bene, l'unica cosa: hai usato la proprietà eta e gli hai assegnato un valore stringa, sarebbe stato più comodo se avessi assegnato un valore numerico, in quanto in una situzioane simile, quel valore poteva servire in operaizoni matematiche
let persona = {

    nome: 'Vincenzo',
    cognome: 'Colabelli',
    eta: '26',
    presentazione: function () {
        console.log(`Ciao, sono ${this.nome}, il mio cognome è ${this.cognome}, ho ${this.eta} anni`);
    }
}

persona.presentazione();