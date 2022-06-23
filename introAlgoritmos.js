
// ALGORITMO QUE RECIBA 2 NUMEROS y RETORNE EL MAYOR
// SI SON IGUALES RETORNAR UNO U OTRO

const buscarMayor = ( num1, num2 )=>{

    if( num1 > num2 ){
        return num1
    }else{
        return num2
    }

}

// console.log( buscarMayor(12, 52) )

// REUTILIZAR EL ALGORITMO PARA ENCONTRAR EL MAYOR NUMERO 
// ENTRE 4 POSIBILIDADES

// 14, 22, 53, 5 

let resultado = buscarMayor( buscarMayor(14 ,22 ) , buscarMayor(53 , 5 ) ) 
console.log(resultado) 

// DADO UN ARREGLO DE NUMEROS 
// RETORNAR UN NUEVO ARREGLO CON EL MENOR Y EL MAYOR DE ESE ARREGLO
// EN LA POSICION 0 EL MENOR y en la POSICION 1 EL MAYOR


let numeros = [ 15, 54, 75, 64, 2, 86] // [ 2, 86 ]

let nuevoArr = [ Math.min(...numeros), Math.max(...numeros) ]

console.log(nuevoArr)

const extraerMenorMayor = ( arreglo )=>{

    let menor = arreglo[0] // 15 / 2
    let mayor = arreglo[0] // 15 / 54 / 75 / 86
    let arrMinMax = []
    
    for (let i = 1; i < arreglo.length; i++) {
        
        if(arreglo[i] < menor ){
            menor = arreglo[i]
        }
        
        if(arreglo[i] > mayor){
            mayor = arreglo[i]
        }
        
    }
    
    // arrMinMax.push(menor, mayor)
    arrMinMax = [menor, mayor]
    return arrMinMax


}

console.log( extraerMenorMayor(numeros) )







