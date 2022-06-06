
// ARRAYS O ARREGLOS 
// let arr = []

let nombre = "maria"
let numero = 29
let seQuedoEstudiando = false
let arr = []
let numerosDeLaSuerte = [29, 32, 15, 17]
let mixto = [12, 15, "hola", true]

console.log( numerosDeLaSuerte[2] )

// console.log(nombres[3])

// console.log( (nombres[ nombres.length - 1 ]) )

// console.log(nombres[12])



// let nombres = ["jorge", "guido", "teresa", "carmen"]
// console.log(nombres.indexOf("juancito"))

let arregoNuevo = [15, 27, 12]

console.log(arregoNuevo)

arregoNuevo.push(55)

console.log(arregoNuevo)
let algoEliminado = arregoNuevo.pop()
let elementoEliminado = arregoNuevo.pop()

console.log(arregoNuevo)
console.log(algoEliminado)
console.log(elementoEliminado)

let arr2 = [ 15, 25, 42]
let arrInvertido = []

arrInvertido.push( arr2.pop() )
arrInvertido.push( arr2.pop() )
arrInvertido.push( arr2.pop() )

console.log("------------------------------")

// LISTA DE CORREOS PENDIENTES

let arrayCorreosPendientes = [
    "iroman@digitalhouse.com",
    "loki%digitalhouse.com",
    "loki@digitalhouse.com",
    "thanosdigitalhouse.com",
    "thanos@digitalhouse.com",
  ];
  
  // array de correos admitidos
let arrayCorreosAdmitidos = [

];
  
  // array de correos descartados
  
let arrayCorreosDescartados = [
    
];

let verificarCorreo = ( email )=>{

    if( email.includes("@") ){



        arrayCorreosAdmitidos.push(email)
    }else{


        arrayCorreosDescartados.push(email)
    }

}

for(let i = 0; i < arrayCorreosPendientes.length ; i++){
    
    verificarCorreo(arrayCorreosPendientes[i])
}

arrayCorreosPendientes = []
console.log(arrayCorreosPendientes)
console.log(arrayCorreosAdmitidos)
console.log(arrayCorreosDescartados)


let numbers =[22, 33, 54, 66, 72, 54, 15, 12]
console.log( numbers.length )
console.log( numbers[ numbers.length  -1 ] )
