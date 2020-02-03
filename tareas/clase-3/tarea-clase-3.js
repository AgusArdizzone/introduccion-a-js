// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

/*
let nombre = prompt("como es tu nombre?");

if(nombre === "agustin"){
    console.log(`Hola Tocayo! Yo tambien me llamo ${nombre}`);
} else if (nombre==="mailen"){
    console.log(`Hola ${nombre}, te llamas igual que mi novia`);
} else {
    console.log(`Hola ${nombre}`);
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

let edad = Number(prompt("que edad tenes?"));
if (edad > 23){
    console.log("Sos mas grande que yo");
} else if (edad < 23){
    console.log("Sos mas chico que yo");
} else { 
    console.log("Tenemos la misma edad");
}
*/

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let tieneDni = prompt("Tenes documento?");

if (tieneDni.toLocaleLowerCase() === "si"){
    let edad = prompt("Que edad tenes?");
    if (edad >= 18){
        console.log("podes entrar");
    }else{
        console.log("No podes entrar");
    }
} else if (tieneDni.toLocaleLowerCase() === "no"){
    console.log("No podes entrar");
} else{
    console.log("no entendi");
}