
// BUBBLE SORT OBJETOS

const arrayCuentas = [
    {
        saldo: 3229.45,
      titular: "Roslyn Torres",
      estaHabilitada: false,
      edadTitular: 27,
      tipoCuenta: "sueldo",
    },
    {
        saldo: 3253.4,
        titular: "Arlene Barr",
        estaHabilitada: false,
        edadTitular: 33,
        tipoCuenta: "sueldo",
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: 1360.19,
      edadTitular: 34,
      tipoCuenta: "corriente",
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: 3627.12,
      edadTitular: 30,
      tipoCuenta: "sueldo",
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: 1616.52,
      edadTitular: 25,
      tipoCuenta: "corriente",
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: 1408.68,
        edadTitular: 34,
        tipoCuenta: "sueldo",
    },
];

// ORDENAR DE FORMA ASCENDENTE EN BASE AL SALDO

// ORDENAR EL ARREGLO DE FORMA ASCENDENTE SI ME DIERON EL OKEY
const ordenar = ( arr ) =>{

    let aux;

    for (let i = 0; i < arr.length; i++) {
       
        for (let j = 0; j < arr.length - 1; j++) {
            
            if( arr[j].saldo > arr[j + 1].saldo ){

                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
}

ordenar(arrayCuentas)

let matriz = [
    [25, 11, -31], // 0 y 2
    [9, -15, 27],  // 1 y 1
    [-20, -11, -14], // 2 y 0
];

// RECORRER LA DIAGONAL SECUNDARIA 
// CAMBIAR LOS NUMEROS IMPARES NEGATIVOS POR SUS IGUALES PERO EN POSITIVOS
// MOSTRAR LA MATRIZ ANTES Y DESPUES DE LA EJECUCION DE LA FUNCION

const recorrer = mat =>{



    for (let i = 0; i < mat.length; i++) {
       
       if( mat[i][ mat.length - 1 - i] < 0 &&  mat[i][ mat.length - 1 - i] % 2 !== 0){

        mat[i][ mat.length - 1 - i] =  mat[i][ mat.length - 1 - i] * (-1)

       }
        
    }    

}

recorrer(matriz)


console.table(matriz)