let cambiaColore = document.querySelector('#cambia');
let grassetto = document.querySelector('#grassetto');
let none = document.querySelector('#none');

let para = document.querySelectorAll('.para');

cambiaColore.addEventListener('click', function() {
    para.forEach((elemento) => {
        elemento.style.color = "rgb(" + Math.floor(Math.random() * 255)
        + "," + Math.floor(Math.random() * 255) + ","
        + Math.floor(Math.random() * 255) + ")";
    });
});

grassetto.addEventListener('click', function () {
    para.forEach((elemento) => {
        elemento.style.fontWeight = 'bold';
        });
});

none.addEventListener ('click', function (){
    para.forEach((elemento) => {
        elemento.style.display = 'none';
    });
});