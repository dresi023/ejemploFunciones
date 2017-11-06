/**
 * @fileOverview Este archivo contiene ejemplos de funciones con for
 * @author Andres Perez
 * @version 1.0
 */

/**
 * @description sumaArray suma los valores de un array
 * @param {Array} numeros array de numeros
 * @return {number} devuelve un numero
 */

function sumaArray(numeros) {
    let suma = 0;
    for (let valor of numeros) {
        suma = suma + valor
    }
    return suma;
}

function sumaArray2(numeros) {
    let suma = 0;
    for (let pos in numeros) {
        suma = suma + nuemros[pos];
    }
    return suma;
}

function sumaArray3(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];

    }
    return suma;
}
let res = sumaArray3([2, 3, 4, 5])

console.log(res)