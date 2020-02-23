
const edadUser = Number(document.querySelector('#edad-user').value);
const $botonIngresar = document.querySelector('#dar-bienvenida');

$botonIngresar.onclick = function(){
    const nombreUser = document.querySelector('#nombre-user').value;
    if(validarNombre(nombreUser)){
        alert(validarNombre(nombreUser));
    } else {
        document.querySelector('#saludo').innerText = `Hola ${nombreUser}!`
    }
    
    return false;
}

function validarNombre(nombre){
    if (!(/^[a-z]+$/i.test(nombre))){
        return "El nombre debe contener al menos una letra";
    }
    return "";
}

console.assert(
    validarNombre("") === "El nombre debe contener al menos una letra",
    "Validar Nombre no valido un nombre vacio",
)

console.assert(
    validarNombre("1234") === "El nombre debe contener al menos una letra",
    "ValidarNombre no valido que no tenga numeros",
)

console.assert(
    validarNombre("Agustin") === "",
    "ValidarNombre no funciono con un nombre valido",
)