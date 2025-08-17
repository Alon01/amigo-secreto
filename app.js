let listaNombres = [];

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