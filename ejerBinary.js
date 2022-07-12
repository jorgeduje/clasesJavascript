
// Dado un array con los datos de una encuesta realizada sobre las 
// canciones más populares
// Escribir un algoritmo que, dada una cancion, me informe cuántos votos obtuvo.
// Resolverlo aplicando búsqueda lineal.
// Resolverlo aplicando búsqueda binaria.


let canciones = [
    {
        cancion: "luna cautiva",
        votos: 2443
    },
    {
        cancion: "highway to hell",
        votos: 5000
    },
    {
        cancion: "infinity",
        votos: 6533
    },
    {
        cancion: "susanita",
        votos: 432222
    },
    {
        cancion: "running up that hill",
        votos: 65122
    }
]

const ordenar = ( arr )=>{

    let temp;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1; j++) {

            if( arr[j].cancion > arr[j + 1].cancion ){

                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

            }
            
        }
       
    }

}

ordenar(canciones)
console.log(canciones)


const buscar = ( arr, cancion )=>{

    for (let i = 0; i < arr.length; i++) {

        if( arr[i].cancion === cancion){

            return arr[i].votos

        }
          
    }

}

console.log( buscar(canciones, "susanita") )


const encontrar = ( arr, cancion )=>{

    let menor = 0
    let mayor = arr.length - 1
    let mid;
    let encontrado;

    while( menor <= mayor ){

        mid = Math.floor( (menor + mayor) / 2 )
        encontrado = arr[mid].cancion

        if( encontrado === cancion ){

            return arr[mid].votos

        }

        if( encontrado > cancion){

            mayor = mid - 1

        }else{

            menor = mid + 1

        }

    }

}

console.log( encontrar(canciones, "susanita"))

// CALLBACK / FUNCION QUE SE PASA COMO ARGUMENTO A OTRA FUNCION

let numeros = [ 14, 54, 12, 4, 3, 1]

// CREAR UN NUEVO ARREGLO CON TODOS LOS NUMEROS DEL ARR PERO 
// MULTIPLICADOS X 2 

const crearArr = (arr) =>{

    let nuevoArr = []

    for (let i = 0; i < arr.length; i++) {
        
        nuevoArr.push( arr[i] * 2 )

    }

    return nuevoArr

}

let nuevoArreglo =  crearArr(numeros)

console.log( nuevoArreglo)

// PROGRAMACION FUNCIONAL
// CALLBACK
// .map() / .filter() / .reduce() / .forEach() / .find() / .sort()

let numeros2 = [ 14, 54, 12, 4, 3, 1]
let objetoss= [ 
    {
        nombre: "pepito",
        edad: 2
    },
    {
        nombre: "maria",
        edad: 3
    }
]

let arrayNuevo = canciones.find( (elemento) => elemento.cancion === "susanita" )
console.log(arrayNuevo)




