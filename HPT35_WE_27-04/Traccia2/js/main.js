let button1= document.querySelector('#button1');
let cont = document.querySelector('#cont');

button1.addEventListener('click', function(){

    let titolo = document.querySelector('#Titolo').value;
   
    let titolo_pubblicato = document.createElement('h1');
    titolo_pubblicato.innerHTML = titolo;
    cont.appendChild(titolo_pubblicato);

    let paragrafo = document.querySelector('#Contenuto').value;
    let paragrafo_pubblicato = document.createElement('p');
    paragrafo_pubblicato.innerHTML = paragrafo;
    cont.appendChild(paragrafo_pubblicato);



    let today = new Date().toLocaleDateString();
    let data = document.createElement('footer');
    data.innerHTML = "Data di pubblicazione " + today;
    cont.appendChild(data);
    
});