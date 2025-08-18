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
    if(validaNombre(nombre) && validaDuplicados(nombre)){
        listaNombres.push(nombre);        
        aux.placeholder = "Agrega otro nombre";
        recorreAgrega();
    }
    return;
}
/**
 * Valida que sea un string y no solo espacios o un vacio.
 * @param {String} nombre 
 * @returns Devuelve un true o false según sea el caso.
 */
function validaNombre(nombre){
    if(nombre != ""){
        return true;
    }else{
        alert("Por favor, inserte un nombre.")
        return false;
    }
}
/**
 * Agrega a pantalla los datos ingresados.
 * @returns No devuelve nada.
 */
function recorreAgrega(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let index = 0; index < listaNombres.length; index++) {
        lista.innerHTML += `<li>${listaNombres[index]}</li>`;
    }
    return;
}
/**
 * Valida si el dato ingresano no es duplicado.
 * @param {String} nombre 
 * @returns Devuelve booleano confirmando a negando que el dato no es duplicado.
 */
function validaDuplicados(nombre){
    if (listaNombres.length > 0) {
        for (let index = 0; index < listaNombres.length; index++) {
            if (nombre === listaNombres[index]){
                alert("Nombre duplicado, ingresa otro.");
                return false;
            }
            else{
                return true;
            }        
        }        
    }else{
        return true;
    }
}