
const edadUser = Number(document.querySelector('#edad-user').value);
const $botonIngresar = document.querySelector('#dar-bienvenida');

$botonIngresar.onclick = function(){
    const nombreUser = document.querySelector('#nombre-user').value;
    document.querySelector('#saludo').innerText = `Hola ${nombreUser}!`
    return false;
}