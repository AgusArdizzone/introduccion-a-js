let horas=0;
let minutos=0;
let segundos=0;

const $agregarVideo = document.querySelector('#agregar-video');
const $calcularTotal = document.querySelector('#calcular');

$calcularTotal.onclick = function(){
    horas += Number(document.querySelector('#horas').value);
    minutos += Number(document.querySelector('#minutos').value);
    segundos += Number(document.querySelector('#segundos').value);
    while(segundos>=60){
        minutos++;
        segundos -= 60;
    }
    while(minutos>=60){
        horas++;
        minutos -= 60;
    }
    document.querySelector('#dura').innerText = "Argentina programa dura: ";
    document.querySelector('#duracion-total').innerText = horas.toString()+ ":" +minutos.toString()+ ":" +segundos.toString();
    return false;
}