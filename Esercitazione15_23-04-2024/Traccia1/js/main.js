let persona = {

    nome: 'Vincenzo',
    cognome: 'Colabelli',
    eta: '26',
    presentazione: function () {
        console.log(`Ciao, sono ${this.nome}, il mio cognome è ${this.cognome}, ho ${this.eta} anni`);
    }
}

persona.presentazione();