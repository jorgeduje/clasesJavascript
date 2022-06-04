


// Algoritmo para convertir una cantidad de pesos a dólares.

const convertirPesos = (cantidadPesos, valorDolar) =>  cantidadPesos / valorDolar
let resultado = convertirPesos(1000, 200)
console.log(resultado)


// CREAR UNA FUNCION QUE RECIBA 3 NUMEROS Y EN BASE AL PROMEDIO
// DEVUELVA SI ESTA APROBADO O DESAPROBADO

const calcularPromedio = ( num1, num2, num3 )=> {

     
    let suma = num1 + num2 + num3
    let promedio = suma / 3

    // if(promedio >= 7){
    //     return "aprobado"
    // }else{
    //     return "desaprobado"
    // }

    return promedio >= 7 ? "aprobado" : "desaprobado"
}

let promedio = calcularPromedio(6, 6, 10)
console.log(promedio)

//Elaborar un programa que permita ingresar un número entero del 1 al 12 
// y muestre la tabla de multiplicar de dicho número.

const multiplicar = numero =>{

    if(numero % 1 !== 0){
        console.log("solo estan permitidos los numeros enteros")
        return
    }

    if( numero >= 1 && numero <= 12){

        for( let i = 1 ; i <= 10 ; i++){
            console.log(`${numero} * ${i} = ${numero * i}`)
        }

    }else{
        console.log("su numero no esta en el rango permitido")
    }

   
}

multiplicar(3.5)





