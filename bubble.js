
// ALGORITMO BUBBLE SORT

let numeros = [ 15, 2, 12, 8, 27, 6, 18]
    // numeros = [2, 12, 8, 15, 6, 18, 27 ]
    // numeros = [2, 8, 12, 6, 15, 18, 27]
    // numeros = [2, 8, 6, 12, 15, 18, 27]

let numerosDeLaSuerte = [15, 2, 4, 151, 2]
let palabras = [ "jirafa", "abeja", "zebra","Abeja", "ABeja", "mariposa"]
let objetos = [ {}, {}, {} ] 


const ordenar = arr =>{

    let aux;
    // let aux = undefined

    for (let i = 1; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1; j++) {

           
            if( arr[j].titularCuenta > arr[j + 1] ){

                aux = arr[j] // guardo el 15 en mi variable aux
                arr[j] = arr[j + 1] //  15 y ahora es un 2
                arr[j + 1] = aux // antes era un 2, ahora es un 15
            }

        }
       
    }

}

ordenar(numeros)
console.log(numeros)

ordenar(numerosDeLaSuerte)
console.log(numerosDeLaSuerte)

ordenar(palabras)
console.log(palabras)



