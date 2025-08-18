let listaNombres = [];

/**
 * Hace el evento de tomar el valor de una caja de texto y validarle que sea o no un String valido.
 * @returns No devulelve nada.
 */
function agregarAmigo(){
    let aux = document.getElementById('amigo');
    let nombre = aux.value;
    aux.value = "";
    console.log(nombre);
    nombre = nombre.trim();
    console.log(`El dato ingresado es ${nombre}`);
    if(validaNombre(nombre)){
        listaNombres.push(nombre);        
        aux.placeholder = "Agrega otro nombre";
        console.log("Agregar ejecutado.");
    }
    return;
}

/**
 * Valida que sea un string y no solo espacios o un vacio.
 * @param {String} nombre 
 * @returns Devuelve un true o false según sea el caso.
 */
function validaNombre(nombre){
    //let n = nombre.trim();
    console.log(`Dato en validación "${nombre}"`);
    if(nombre != ""){
        return true;
    }else{
        alert("Por favor, inserte un nombre.")
        return false;
    }
}