let elenco_contatti = document.querySelector('#elenco_contatti');
let nome_contatto = document.querySelector('#nome_contatto');
let num_telefono = document.querySelector('#num_telefono');
let aggiungi_contatto = document.querySelector('#aggiungi_contatto');
let visualizza_agenda = document.querySelector('#visualizza_agenda');
let elimina_contatto = document.querySelector('#elimina_contatto');
let modifica_contatto = document.querySelector('#modifica_contatto');

let agenda = {

    contatti : [
        {
         name: 'Vincenzo',
         tel: '3287776654'   
        },
        {
         name: 'Andrea',
         tel: '32892828922'   
        },
        {
         name: 'Luigi',
         tel: '38484838322'   
        }

    ],

    visualizzaContatti : function () {

        this.contatti.forEach( (contatto) => {

            let par_contatto = document.createElement('p');

            par_contatto.innerHTML = `
            
            Nome: <strong>${contatto.name}</strong>,
            Telefono: <strong>${contatto.tel}</strong>
            
            `;

            elenco_contatti.appendChild(par_contatto)

        });
        
    },

    aggiungiContatto : function () {
        let new_contatto = {name: nome_contatto.value, tel: num_telefono.value};
        this.contatti.push(new_contatto);

    },

    eliminaContatto: function (i) {
        this.contatti.splice(i, 1);
        
    },

    modificaContatto: function (name, tel) {
        for (let i = 0; i < this.contatti.length; i++){
            if (this.contatti[i].name === name){
                this.contatti[i] = {name, tel};
            }    
        }
    }

    
}

let controllo = 0;
visualizza_agenda.addEventListener('click', () => {
    if (controllo == 0){
        agenda.visualizzaContatti();
        visualizza_agenda.innerHTML = 'Nascondi agenda';
        controllo = 1;
    } else {
        visualizza_agenda.innerHTML = 'Visualizza agenda';
        elenco_contatti.innerHTML = '';
        controllo = 0;  
    }
    
});

aggiungi_contatto.addEventListener('click', () => {
    agenda.aggiungiContatto();
    alert ('Contatto aggiunto!');

    agenda.visualizzaContatti();
    visualizza_agenda.innerHTML = 'Nascondi agenda';
    controllo = 1;
    nome_contatto.value = '';
    num_telefono.value = '';
    
});

elimina_contatto.addEventListener('click', () => {
    agenda.eliminaContatto(nome_contatto.value);
    alert (`Contatto ${nome_contatto.value} eliminato!`);

    agenda.visualizzaContatti();
    visualizza_agenda.innerHTML = 'Nascondi agenda';
    controllo = 1;
    nome_contatto.value = '';
    num_telefono.value = '';
})

modifica_contatto.addEventListener('click', () => {
    agenda.modificaContatto(nome_contatto.value, num_telefono.value);
    alert (`Contatto ${nome_contatto.value} modificato!`);

    agenda.visualizzaContatti();
    visualizza_agenda.innerHTML = 'Nascondi agenda';
    controllo = 1;
    nome_contatto.value = '';
    num_telefono.value = '';

})







