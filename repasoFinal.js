
// ULTIMO REPASO 💪💪💪

// ORDENAR LOS ESTUDIANTES POR LA EDAD , DE FORMA ASCENDENETE
let estudiantes = [
  {
    nombre: "teresa",
    edad: 42,
  },
  {
    nombre: "zaul",
    edad: 12,
  },
  {
    nombre: "antonella",
    edad: 22,
  },
];


const ordenar = arr => {

  let aux;

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - 1; j++) {

      if( arr[j].edad > arr[j + 1].edad ){

        aux = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = aux

      }
      
    }

  }

}

ordenar(estudiantes)
console.log( estudiantes )




// MULTIPLICAR LOS ELEMENTOS DE LA DIAGONAL PRINCIPAL
// PERO SOLO LOS MULTIPLOS DE 5

let matriz = [

    [25, 11, 31],
    [9, 15, 27],
    [29, 11, 14],
];

const principal = mat => {

  // let acc = 1

  for (let i = 0; i < mat.length; i++) {


      
    mat[i][i] = mat[i][i] + 1 
    
    
  }

  return acc

}


// RECORRER LA COLUMNA DE LA POSICION 1 Y SUMAR LOS 
// NUMEROS QUE SEAN PARES Y MAYORES QUE  15

let matriz2 = [

    [25, 31],
    [9, 27],
    [30,],
    [58, 22],
];

const recorrerColCero = mat => {

  let acc = 0

  for (let i = 0; i < mat.length; i++) {
   
    if( mat[i][1] !== undefined ){

      if( mat[i][1] % 2 === 0 && mat[i][1] > 15){

       acc += mat[i][1]

      }
    }   
  }

  return acc

}

// ORDENAR EL SIGUIENTE ARREGLO DE FORMA DESCENDENTE 
// UNICAMENTE SI RECIBIMOS POR PARAMETROS LA INDICACION,
// SI NO, DEJAREMOS EL ALGORITMO LISTO PARA LA PROXIMA

let numeros = [ 522, 122, 2, 155, 741]

const ordenar2 = (arr, indicacion)=>{

  if( indicacion === undefined ){
    return
  }

  let aux;
  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - 1; j++) {

      if( arr[j] < arr[j + 1] ){

        aux = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = aux

      }
      
    }
    
  }

}


// SUMAR LOS ELEMENTOS IMPARES DE LA DIAGONAL SECUNDARIA

let matriz3 = [

  [25, 31, 12], // 12
  [10, 27, 13], // 27
  [10, 27, 21], // 10

];

const secundaria = mat =>{

  let acc = 0

  for (let i = 2; i < mat.length; i++) {

    if( mat[i][ mat.length - 1 - i ] % 2 !== 0){
      acc += mat[i][ mat.length - 1 - i ]
    }
    
  }

  return acc

}

// CAMBIAR TODOS LOS ELEMENTOS NEGATIVOS DE LA MATRIZ POR SU IGUAL PERO POSITIVO


let matrix = [

  [25, -31, 12],
  [-10, 27, -13],
  [10, -27, -21],

];

const recorrerMat = mat => {

  for (let i = 0; i < mat.length; i++) {
    
    for (let j = 0; j < mat[i].length; j++) {

      if( mat[i][j] < 0){

       mat[i][j] = mat[i][j] * (-1)

      }
      
    }

  }

}

recorrerMat(matrix)
console.table(matrix)

console.log()