
// WELCOME TO MATRICES 💪💪💪

let numeros = [ 12, 15, 4]

// console.log( numeros[1] )

let matriz = [

    [1, 5, 4], //FILAS
    [2, 6, 1], //FILAS
    [5, 7, 2] //FILAS
    
]

// 9

// TODO:
// * Recorrer una fila

let recorrerFila = ( mat )=>{

    let acc = 0
    for (let i = 0; i < mat[2].length; i++) {

        acc += mat[2][i]
        
    }
    return acc
   
}
console.log( recorrerFila(matriz) )


// * Recorrer una columna

// LINK 3 X 3 / CUADRADA
let matriz2 = [

    [1, 5, 4], //FILAS
    [2, 6, 1], //FILAS
    [5] //FILAS
    
]
// 18

let recorrerCol = ( mat )=>{

    let acc = 0

    for (let i = 0; i < mat.length; i++) {
        
        if( mat[i][1] !== undefined ){
            acc += mat[i][1]
        }
        
    }
    return acc

}

console.log( recorrerCol(matriz2) )

// * Recorrer la Matriz completa

let matriz3 = [

    [1, 5, 4,14,25], //FILAS
    [2, 6, 1], //FILAS
    [5, 7], //FILAS
    [5], //FILAS
    [5], //FILAS
    [5, 12], //FILAS
    [5] //FILAS
    
]

// 33

let recorrerMat = ( mat )=>{

    let acc = 0

    for (let i = 0; i < mat.length; i++) { // 3
        
        for (let j = 0; j < mat[i].length; j++) { // 3

           acc+= mat[i][j]
          
        }
    }

    return acc

}

console.log( recorrerMat(matriz3) )

