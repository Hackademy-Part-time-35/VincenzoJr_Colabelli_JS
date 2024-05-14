let cont_annunci = document.querySelector('#cont_annunci');

fetch('./dati/elenco_immobili.json')
    .then(response => response.json())
    .then(data =>{

        function creaCardAnnunci() {
            
            data.forEach(annuncio => {
                
                let colonna = document.createElement('div');
                
                colonna.classList.add('col-6', 'mb-4');

                colonna.innerHTML = `
                <div class="card">
                        <img src="${annuncio.immagine}">
                        <div class="card-body">
                            <a href="#" class="card-title titoli-card">${annuncio.city}</a>
                        <h5 class="my-3 fw-light">${annuncio.prezzo} €</h5>
                        <p class="fw-lighter mb-3">${annuncio.metri_quadrati}m2 - ${annuncio.numero_camere} locali</p>
                        <a href="#" class="btn button-color">Contatta</a>
                        </div>
                    </div>         
                `;
                cont_annunci.appendChild(colonna);
            });
        }

        creaCardAnnunci();

    });
