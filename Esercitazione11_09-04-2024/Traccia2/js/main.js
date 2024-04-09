let gatti = 44;
let gatti_in_fila = 6;

let fila_risultante; 
fila_risultante = (gatti / gatti_in_fila).toFixed(0);

let gatti_fuori;
gatti_fuori = parseInt(gatti) % parseInt(gatti_in_fila);    

let gatti_mancanti_fila; 
gatti_mancanti_fila = gatti_in_fila - gatti_fuori;


console.log(`Ci sono ${gatti_in_fila} di gatti e ne mancano ${gatti_mancanti_fila} per una nuova fila, con un avanzo di ${gatti_fuori}`);




