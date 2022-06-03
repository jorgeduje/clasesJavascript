const prompt = require("prompt-sync")({ sigint: true });

// CREAR UNA FUNCION QUE MUESTRE O IMPRIMA POR CONSOLA EL SALUDO
// CREAR UNA FUNCION QUE RETORNE O DEVUELVA TAL COSA
// CREAR UNA FUNCION QUE RECIBA UN NUMERO Y LO DEVUELVA MULTIPLICADO X 15

// let suma = ()=>{

// }

// let algo = function(){

// }

// function algo2 (){

// }

// CREAR UNA FUNCION QUE DEVUELVA LA SUMA DE 2 NUMEROS QUE RECIBO POR PARAMETRO
// TIENE QUE SER UNA FUNCION EXPRESADA DE TIPO FLECHA
// let multiplicacion = numero => numero * 5

let suma = (x, y) => x + y;
let resultado = suma(15, 4);

// console.log( suma(15, 4) )
console.log(resultado);

// CREAR UNA FUNCION DECLARADA QUE RECIBA POR PARAMETRO EL RESULTADO
// DE LA FUNCION SUMA Y LO MULTIPLIQUE POR 10 Y LO RETORNE


function multiplicar(x) {
 
  return x * 10;

}


let resultadoMultiplicacion = multiplicar(resultado);

console.log(resultadoMultiplicacion);

/**
    ¿Se acuerdan cuando declarábamos variables para poder utilizarlas luego? Bueno, 
    aquí podemos hacer algo similar, pero en lugar de declarar variables (estructuras que 
    contienen información) podemos declarar funciones (estructuras que procesan información).

    Escribir las siguientes tres funciones:

    anterior: recibe un número como parámetro y devuelve ese número menos uno.
    triple: recibe un número como parámetro y devuelve el triple de ese número.
    anteriorDelTriple: recibe un número como parámetro y, utilizando las dos funciones
    anteriores, tendrá que devolver el número recibido multiplicado por 3 (tres) y
    al resultado restarle 1 (uno).

 */

let anterior = (numero) => numero - 1;

let triple = (numero) => numero * 3;

let anteriorDelTriple = (numero)=> anterior(triple(+numero))
    
let x = prompt("ingrese")
 let y = anteriorDelTriple(x) 
 console.log(y)




let suma2 = (a, b) => {
  return a - b;
};

// let primero = parseInt(prompt("ingresa tu primer numero"));
// let segundo = parseInt(prompt("ingresa tu segundo numero"));
// console.log(suma2(primero, segundo));


/*
    1) La empresa Alianza necesita contar con un programa que le permita calcular el
    salario diario de un empleado (la hora se paga $500). 
    ¿Te animás a realizar un programa que ingrese las horas trabajadas por
    un empleado y diga cuanto gano ese Dia?

    2) Ahora, la empresa comienza a pagar horas extra (la hora extra se paga $800) 
    a partir de la quinta hora. ¿Te animas a hacer un programa donde se ingrese las horas 
    trabajadas calcular cuanto gano en el día?

*/

let calcularSalario =  horasTrabajadas => horasTrabajadas * 500
console.log(calcularSalario(10))


let calcularSalarioTotal =  horasTrabajadas =>{

    let salarioHorasComunes = 5 * 500
    let salarioHorasExtras = (horasTrabajadas - 5) * 800
    return salarioHorasComunes + salarioHorasExtras

}

console.log(calcularSalarioTotal(7))