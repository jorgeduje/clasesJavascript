

let numeros = [12, 43, 22, 15, 65, 13, 76]

// FUNCIONAL
console.log( numeros.indexOf(65) )

// BUSQUEDA LINEAL

const encontrar = (arr, elemento)=>{
    
    for (let i = 0; i < arr.length; i++) {
        
        if( arr[i] === elemento){
            return i
        }
        
    }
    
}
console.log(encontrar(numeros, 65))

// ANCHOR Algoritmo Binary Search

let numeros2 = [2, 5, 12, 15, 22, 31, 44]

const encontrar2 = ( arr, buscado )=>{

    let menor = 0
    let mayor = arr.length - 1 // 6 // 2 // 0 // -1
    let mid; // POSICION // 
    let encontrado; // ELEMENTO ENCONTRADO EN CADA VUELTA // 

    while( menor <= mayor ){

        mid = Math.floor( (menor + mayor) / 2 ) // 3 // 1 // 0
        encontrado = arr[mid] // 15 // 5 // 2

        if( encontrado === buscado){
            return mid
        }

        if( encontrado > buscado ){
            mayor = mid - 1
        }else{
            menor = mid + 1
        }
    }

    return " lo siento tu numero no existe"

}
console.log(encontrar2( numeros2, 2))

