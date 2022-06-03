



let conversor = ( cantidadDePesos, precioDolar )=>{

    let cantidaDolares = cantidadDePesos / precioDolar
    return cantidaDolares
}

let resultadoEnDolares = conversor(50000, 200)
console.log(resultadoEnDolares)


let promediar = ( a, b, c)=>{

    let suma = a + b + c
    let promedio =  suma / 3
   
    if(promedio >= 7){
        return "aprobado"
    }else{
        return "desaprobado"
    }

}

let promedioFinal = promediar( 6, 6, 9 )
console.log(promedioFinal)

function nombre( numero ){

    if(numero % 2 === 0){
        return "es par"
    }else if(numero % 2 !== 0){
        return "no es par"
    }else{
        return "no puedo calcular eso"
    }

}


//Elaborar un programa que permita ingresar un número entero del 1 al 12
// y muestre la tabla de multiplicar de dicho número.

const tablaMultiplicar = ( numero )=>{

    if( numero % 1 !== 0){
        console.log("no es un entero")
        return
    }
    
    if(numero >= 1 && numero <= 12){

        let resultado = 0
        for(let i = 1 ; i <= 10 ; i++ ){
            resultado = numero * i
            console.log(`${numero} * ${i} = ${resultado}`)
        }


    }else{
        console.log("el numero no es valido") 
    }


}
tablaMultiplicar(1.5)

for(let i = 0 ; i <= 5 ; i++ ){
    console.log(`estoy dando la vuelta numero ${i}`)
}

