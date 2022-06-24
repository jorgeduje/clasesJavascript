
// WELCOME TO MATRICES 💪💪💪


// MATRIZ CUADRADA de 3 X 3 
let matrix = [
    [4, 6, 12], //FILAS
    [5, 4, 2], //FILAS
    [1, 16, 7, 12, 4] //FILAS
]

// console.log( matrix[1][0] )
// console.log( matrix[1][1] )
// console.log( matrix[1][2] )

// console.log( matrix[0][1] ) // primero fila, despues columna

// RECORRER FILA posicion 1

let recorrerFila = ( mat )=>{

    let acc = 0

    for (let i = 0; i < mat[2].length; i++) {
       
        acc += mat[2][i]
        
    }
    return acc

}
console.log( recorrerFila(matrix) )


// COLUMNA

let matrix2 = [
    [4, 6, 12], //FILAS 
    [5, 4, 2], //FILAS
    [1, 16] //FILAS
]
console.table(matrix2)

// 21

console.log( matrix2[0][2] )
console.log( matrix2[1][2] )
console.log( matrix2[2][2] )

let recorrerCol = ( x )=>{

    let acc = 0

    for (let i = 0; i < x.length; i++) {

       if( x[i][2] !== undefined ){
            acc += x[i][2]
       }
        
    }
    return acc

}
console.log( recorrerCol(matrix2) )




// MATRIZ COMPLETA

let arrMatriz = [
    [4, 2, 3], 
    [15, 7, 12],
    [5, 2, 1],
];

let recorrerMat = ( x )=>{

    let acc = 0
    
    for (let i = 0; i < x.length; i++) {
        
        for (let j = 0; j < x[i].length; j++) {
           
            acc += x[i][j]

        } 
    }
    
    return acc

}
console.log(recorrerMat(arrMatriz))
