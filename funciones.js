

const prompt = require("prompt-sync")({ sigint: true });

// FUNCIONES DECLARADAS Y EXPRESADAS = ANONIMA

// DECLARADA 

function sumar(){

    return "soy declarada"

}


//EXPRESADA COMUN
let restar = function(){

    return "soy expresada comun"

}


// EXPRESADA EN FUNCION FLECHA O ARROW FUNCTION

let multiplicar = ()=>{

 return "soy una flecha"

}

// PARA EJECUTAR UNA FUNCION PONEMOS EL NOMBRE y LE PONEMOS LOS ()



let sumar2 = function(){

    // BLOQUE DE CODIGO
    let nombre = "jorge"

    return 2 + 3 

}

console.log( sumar2() )

let restar2 = function( num1, num2 ){

    return  `tu vuelto es $${(num1 - num2)}`

}

// LO QUE RETORNE LA FUNCION SERA NUESTRO VUELTO 
// Y LO GUARDAREMOS EN EL CHANCHITO 😃

let chanchito = restar2(20, 7)

console.log(chanchito)




let saludar = ( nombre )=>{
    
    return `hola ${nombre} como estas?`
    
}

let nombreUsuario = prompt("ingrese su nombre")

console.log(saludar(nombreUsuario))

// let saludar =  nombre => `hola ${nombre} como estas?`

// ESTA ES LA FORMA RESUMIDA DE LA FUNCION FLECHA CUANDO SOLO TIENE UN PARAMETRO 
// Y SOLO TIENE UNA SOLA LINEA DE CODIGO EN EL CUERPO DE LA FUNCION 
// PODEMOS OMITIR LOS PARENTESIS, LAS LLAVES, Y LA PALABRA RETURN


let despedir = (nombre)=>{

    return `adios ${nombre}`
}

// USAMOS EL MISMO NOMBRE QUE NOS INGRESO EL USUARIO, PERO AHORA PARA DESPEDIRLO 😓
console.log(chanchito, despedir(nombreUsuario))
