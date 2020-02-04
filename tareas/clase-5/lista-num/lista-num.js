const arrayTotal = document.querySelectorAll('.numero');

let arrayNumeros = [];
function calcularPromedio (numeros){
    let total=0;
    for (let i = 0; i < numeros.length; i++) {
         total += numeros[i];
    }
    return total/numeros.length;
}

function numMasPequeno (numeros){
    let menor = Number.MAX_VALUE;
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i]<menor){
            menor =numeros[i];
        }
    }
    return menor;
}

function numMasGrande (numeros){
    let mayor = Number.MIN_VALUE;
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i]>mayor){
            mayor =numeros[i];
        }
    }
    return mayor;
}

function numMasRepetido (numeros){
    let masRepetido = 0;
    let contNumAnterior=0;
    for (let i = 0; i < numeros.length; i++) {
        let contador = 0;
        for(let j = 0; j < numeros.length; j++){
            if(numeros[i]===numeros[j]){
                contador++;
            }
        }
        if(contador>contNumAnterior){
            masRepetido = numeros[i];
        }
        contNumAnterior = contador;
    }
    return masRepetido;
}

for (let i = 0; i < arrayTotal.length; i++) {
      arrayNumeros.push(Number(arrayTotal[i].innerText));
}

console.log(arrayNumeros);

document.querySelector("#promedio").innerText= `El promedio es ${calcularPromedio(arrayNumeros)}`;
document.querySelector("#menor").innerText= `El numero menor es ${numMasPequeno(arrayNumeros)}`;
document.querySelector("#mayor").innerText= `El numero mayor es ${numMasGrande(arrayNumeros)}`;
document.querySelector("#repetido").innerText= `El numero mas repetido es ${numMasRepetido(arrayNumeros)}`;