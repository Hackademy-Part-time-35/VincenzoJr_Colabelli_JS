// Benissimo, continua cosi
let agenda = {

    contatti: [
        {nome: 'Vincenzo', telefono: '3283283356'
        },
        {nome: 'Nicola', telefono: '3234445678'
        },
        {nome: 'Luigi', telefono: '3456532343'},
        {nome: 'Marco', telefono: '3245676566'}

    ],

    mostra_contatti: function() {
        console.log(this.contatti); 
    },

    mostra_contatto_singolo: function(i) {
        console.log(this.contatti[i]);   
    },

    eliminare_contatto: function (i) {
        this.contatti.splice(i, 1)
    },

    aggiungi_contatto : function(nuovo_nome, nuovo_telefono) {
        this.contatti.push ( {nome: nuovo_nome, telefono: nuovo_telefono});
    },

    modifica_contatto: function (nome, new_name, telefono) {

        for (let i = 0; i < this.contatti.length; i++) {
            if (this.contatti[i].nome == nome) {
                this.contatti[i] = {new_name, telefono};
            }
            
        }
        
    },
}


console.log(agenda);

// agenda.mostra_contatti();

// agenda.mostra_contatto_singolo(2);

// // agenda.eliminare_contatto('Vincenzo');

// agenda.aggiungi_contatto('Giovanni', '3467869865');

// agenda.modifica_contatto ('Vincenzo', 'Luigi', '3287656765')














