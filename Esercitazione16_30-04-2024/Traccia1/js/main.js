let input = document.querySelector('#input');
let contatore = document.querySelector('#contatore');
let tempo = document.querySelector('#tempo');
let avvia = document.querySelector('#avvia');
let pausa = document.querySelector('#pausa');
let azzera = document.querySelector('#azzera');

let stop = 'off';
let controllo_secondi_rimanenti;

function secondi_rimanenti() {
    tempo.innerHTML--;
    if (tempo.innerHTML == 0) {
        clearInterval(controllo_secondi_rimanenti);
        tempo.innerHTML = '0, Terminato';
    }
};

function secondi() {
    tempo.innerHTML = input.value;
};

avvia.addEventListener ('click', () => {
    secondi();
    controllo_secondi_rimanenti = setInterval(secondi_rimanenti,1000);
    input.value = '';
});

pausa.addEventListener('click', () => {
    if (stop === 'on'){
        controllo_secondi_rimanenti = setInterval(secondi_rimanenti,1000);
        stop = 'off';
        pausa.innerHTML = 'Pausa';
    } else if (stop === 'off') {
        stop = 'on';
        clearInterval(controllo_secondi_rimanenti);
        pausa.innerHTML = 'Riprendi';
    }
})

azzera.addEventListener('click', () => {
    input.value = '';
    tempo.innerHTML = '';
    clearInterval(controllo_secondi_rimanenti);
})
