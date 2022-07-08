

// BUSQUEDA LINEAL


numeros = [ 12, 43, 1, 65, 24] // 5

const encontrarElemento = ( arr, elemento )=>{

    // let index = undefined
    let index;
    
    for (let i = 0; i < arr.length; i++) {
        
        if( arr[i] === elemento ){
            
            index = i
            
        }
        
    }
    
    return index
    
}

// console.log( encontrarElemento(numeros, 65) )
// console.log( numeros.indexOf(65) )


// ANCHOR Algoritmo Binary Search 

let numeros2 = [1, 4, 12, 15, 22, 44, 55, ] //

const encontrar = ( arr, buscado )=>{

    let menor = 0 // 4
    let mayor = arr.length - 1 // 3
    let mid;
    let encontrado;

    while( menor <= mayor ){

        mid = Math.floor( (menor + mayor) / 2 ) 
        encontrado = arr[mid] 

        if( encontrado === buscado ){

            return mid

        }

        if( encontrado > buscado){

            mayor = mid - 1

        }else{

            menor = mid + 1

        }


    }

    return "Lo siento no encontre el elemento buscado"

}

console.log( encontrar(numeros2, 44))

