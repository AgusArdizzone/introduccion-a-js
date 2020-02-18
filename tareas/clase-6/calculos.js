function calcularMayorEdad(edades){
    let mayor = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < edades.length; i++) {
        if(edades[i]>mayor){
            mayor = edades[i];
        }
    }
    return mayor;
}

function calcularMenorEdad(edades){
    let menor = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < edades.length; i++) {
        if(edades[i]< menor){
            menor = edades[i];
        }
    }
    return menor;
}

function calcularPromedioEdad(edades){
    let sumaEdades = 0;
    for (let i = 0; i < edades.length; i++) {
        sumaEdades += edades[i];
    }
    return sumaEdades/edades.length;
}