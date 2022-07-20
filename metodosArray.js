
// ANCHOR METODOS AVANZADOS DE ARRAYS

// .map / .filter / .reduce / .forEach / .find / .sort

let numeros = [ 2, 4, 3, 5] // [6, 12, 9, 15] // [2, 3]

// CREAR UN NUEVO ARREGLO CON TODOS LOS ELEMENTOS DE MI ARRAY ORIGINAL
// PERO MULTIPLICADOS POR 3

const creadorDearr = arr =>{
    let arrayNuevo = []

    for (let i = 0; i < arr.length; i++) {

        arrayNuevo.push( arr[i] * 3 )
        
    }

    return arrayNuevo
}

let arrayMultX3 = creadorDearr(numeros)

console.log( arrayMultX3 )

let arrayMultiplicado = numeros.map( x => x * 3)
console.log( arrayMultiplicado )

// .map / .filter / .reduce / .forEach / .find /

const filtar = arr => {
    let arrNuevo = []

    for (let i = 0; i < arr.length; i++) {

        if( arr[i] < 4){
            arrNuevo.push( arr[i] )
        }
        
    }

    return arrNuevo
}

console.log( filtar(numeros) )
let numerosFiltrados =  numeros.filter( (elemento, indice) => elemento < 4)




// numeros.push( 12 )
// numeros.indexOf( 222 )

// numeros.map( function(){} )
// numeros.map( ()=>{} )

// CALLBACKS = UNA FUNCION QUE ES PASADA COMO ARGUMENTO A OTRA FUNCION

let numeros2 = [ 2, 4, 3, 5]

// MAP:
// DEVUELVE UN NUEVO ARREGLO 
// ESE ARREGLO NUEVO VA SER SIEMPRE DE LA MISMA LONGITUD QUE EL ORIGINAL
//  POSICION 0 RECIBO EL ELEMENTO
//  POSICION 1 RECIBO EL INDICE
let mapeado = numeros2.map( ( elemento, indice  )=> elemento * indice ) // [0, 4, 6, 15]


let productos = [
    {
        nombre: "televisor",
        precio: 50000,
        color: "negro"
    },
    {
        nombre: "celular",
        precio: 40000,
        color: "rojo"
    },
    {
        nombre: "zapatilla",
        precio: 15000,
        color: "blanco"
    }
]


// .reduce / .forEach / .sort() /

// FIND = RETURNAR EL ELEMENTO TAL CUAL COMO ES

let filtrado = productos.filter( ( elemento )=> elemento.nombre === "televisor"  )
let encontrado = productos.find( ( elemento )=> elemento.nombre === "televisor"  )
console.log(filtrado)
console.log(encontrado)

// .forEach 

// let num = [1, 2, 4, 5]
let productos2 = [
    {
        nombre: "televisor",
        precio: 50000,
        color: "negro"
    },
    {
        nombre: "celular",
        precio: 40000,
        color: "rojo"
    },
    {
        nombre: "zapatilla",
        precio: 15000,
        color: "blanco"
    }
]

productos2.forEach( (elemento, indice)=> {
    elemento.id = indice + 1
} )

console.log(productos2)

let num = [ 1, 2, 3]

let num2 = []

num.map( elemento => {
    num2.push( elemento * 2)
})

console.log(num2)


let palabras = [ "zebra", "aguila", "jirafa" ]

let numeritos = [ 12, 4, 110, 1, 22, 333]

console.log( palabras )

console.log( palabras.sort() )

console.log(numeritos)
console.log( palabras.sort( (a, b) => a - b ) )

let index = 2
// console.log(array1.at(index))

// .reduce

// LLEVA UN ARREGLO A SU MAXIMA REDUCCION NUMERO O UN STRING

let numeros10 = [ 1, 4, 6 ]

// PRIMER PARAMETRO RECIBE EL ACC y SEGUNDO EL ELEMENTO
console.log( numeros10.reduce( (acc, elemento)=>{

    return acc * elemento

} ,) )

let productos3 = [
    {
        nombre: "televisor",
        precio: 50000,
        color: "negro"
    },
    {
        nombre: "celular",
        precio: 40000,
        color: "rojo"
    },
    {
        nombre: "zapatilla",
        precio: 15000,
        color: "blanco"
    }
]

console.log( productos3.reduce( (acc, producto)=>{

    return acc + producto.precio

}, ))

let numerosss = [ 12, 41321, 1231, 555, 123, 1235, ]

let ordenados = numerosss.sort( (a, b) => a - b)

let numeroMayor = ordenados[ ordenados.length - 1]

console.log(numeroMayor )

console.log(numerosss.reduce((acc, elemento)=> acc > elemento ? acc : elemento ))

console.log( Math.min( ...numerosss ) )


// DESESTRUCTURACION DE OBJETOS

let persona = {

    nombre: "juancito",
    edad: 29,

}

// VERBOS HTTP

// GET(/usuarios) 
// POST(/usarios, data) 
// PUT (/usaruis, data)
// DELETE(/usuarios, id)
