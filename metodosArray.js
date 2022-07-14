
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

// .map / .filter / .reduce / .forEach / .find / .sort

// .map()
//.filter()



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
let numerosFiltrados =  numeros.filter( (elemento, indice) => elemento < 4) // []




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
    },
    {
        nombre: "vw",
        color: "morado",
        precio: 3000000
    }
]

let fueFiltrado = false // STATE FLAG O ESTADOS BANDERA

let filtrarPorPrecio = ()=>{
    
    let filtrados = productos.filter( producto => producto.precio <= 40000)
    fueFiltrado = true
    return filtrados
}

const AgregarAlCarrito = (indice)=>{

    "AGREGUE AL CARRITO EL ELEMETO CON EL ID PASADO POR PARAMETRO"
}

<>
    <button onClick={filtrarPorPrecio}>FILTRAR</button>

    <div class="container">


        {
            fueFiltrado === false ? productos.map( (producto, indice) => {
                return (
                    <div>
                        <h2>{producto.nombre}</h2>
                        <h2>{producto.color}</h2>
                        <h2>{producto.precio}</h2>
                        <button onClick={()=>AgregarAlCarrito(indice)}>Comprar</button>
                    </div>
                )
            }) : filtrados.map( (producto) => {
                return (
                    <div>
                        <h2>{producto.nombre}</h2>
                        <h2>{producto.color}</h2>
                        <h2>{producto.precio}</h2>
                        <button onClick={AgregarAlCarrito}>Comprar</button>
                    </div>
                )
            })
        }

    </div>
</>

algo ? "true" : "falso"

