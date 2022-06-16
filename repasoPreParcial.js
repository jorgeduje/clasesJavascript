
const edades = [11, 12, 15, 18, 1, 22, 10, 33, 18, 5];

// Obtener en un nuevo array las edades menores a 18.

// CREAR UNA FUNCION QUE RECIBA UN ARRAY
// CREAR UN ARREGLO VACIO
// RECORRER AL ARREGLO QUE RECIBI
// COMPARAR CADA ELEMENTO CON EL NUMERO 18
// SI ES MENOR LO PUSHEO A MI ARREGLO NUEVO
// POR ULTIMO RETORNAR EL NUEVO ARREGLO 


let creadorDeArray = ( arr )=>{
  
  let arrayMenoresDe18 = []

  for(let i = 0; i < arr.length ; i++){

    if( arr[i] == 18 ){
      arrayMenoresDe18.push( arr[i] )
    }
  }
  return arrayMenoresDe18
}

let x = creadorDeArray(edades)
console.log( x )





// calcular el total de la suma de todos los elementos del arreglo
// const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

let sumarElementos = ( arr )=>{

  let acc = 0

  for (let i = 0; i < arr.length; i++) {
   
    acc += arr[i]
    
  }

  return acc

}

console.log(sumarElementos(edades))


// const edades = [11, 12, 15, 18, 1, 22, 10, 33, 18, 5];
// OBTENER EL MENOR

let extraerElMenor = ( arr )=>{

  let menor = arr[0] // 11 // 10 // 5

  for (let i = 1; i < arr.length; i++) {
   
    if( arr[i] < menor){
      menor = arr[i]
    }
    
  }
  return menor

}
console.log(extraerElMenor(edades))




const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: "$3,253.40",
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: "$3,229.45",
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: "$1,360.19",
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: "$3,627.12",
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: "$1,616.52",
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: "$1,408.68",
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
    ,
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: "$1,408.68",
      edadTitular: 25,
      tipoCuenta: "pepito"
    }
  ]


  // Obtener un nuevo array de cuentas cuyas edades sean menores a 30.


  function extraerMenoresDe30( arreglo ){

    let nuevoArr = []

    for (let i = 0; i < arreglo.length; i++) {
      
      if( arreglo[i].edadTitular < 30){
        nuevoArr.unshift( arreglo[i] )
      }
      
    }

    return nuevoArr

  }

console.log(   extraerMenoresDe30(arrayCuentas) )


// Obtener un nuevo array por cada tipo de cuenta y agregarle sus elementos.

let arrSueldo = []
let arrCorriente = []

let creadorArr = ( arr )=>{


  for (let i = 0; i < arr.length; i++) {
    
    if( arr[i].tipoCuenta === "sueldo"){

      arrSueldo.push( arr[i] )
    }else if(arr[i].tipoCuenta === "corriente"){

      arrCorriente.push(arr[i])
    }
    
  }

}

creadorArr(arrayCuentas)
console.log( "Sueldo", arrSueldo )
console.log( "Corriente", arrCorriente )



