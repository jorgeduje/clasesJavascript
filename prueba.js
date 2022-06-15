

const edades = [11, 5, 15, 18, 1, 18, 10, 33, 18, 2];
// const edadesNuevas = [114, 12, 115, 158, 25, 22, 10, 323, 18, 5];

// Obtener en un nuevo array las edades menores a 18.

// funcion que recibe un arr 
// crear un arrglo vacio

// recorrer el arreglo y comparar el elemento que viene en cada vuelta
// con la condicion, si se cumple, agregar ese elemento al arreglo
// debo retornar ese arreglo

// const edades = [11, 5, 15, 18, 25, 18, 10, 33, 18, 2];

let arrDeEdadesMenores = []
let arrMayores = []
let arrIguales = []

let creadorArr = ( arr )=>{

  for (let i = 0; i < arr.length; i++) {
    
    if( arr[i] < 18){
      arrDeEdadesMenores.push( arr[i] )
    }else if(arr[i]===18){
      arrIguales.push( arr[i] )
      
    }else{
      arrMayores.push( arr[i] )

    }
    
  }

}

console.log( creadorArr(edades) )
console.log( arrMayores )
console.log( arrIguales )
console.log( arrDeEdadesMenores )

// const edades = [11, 5, 15, 18, 1, 18, 10, 33, 18, 2];
// el menor


let encontrarMenor = ( arreglo )=>{

  let menor = arreglo[0] // 5 // 2

  for (let i = 0; i < arreglo.length; i++) {
    
    arreglo[i] < menor ? menor = arreglo[i] : null
    
  }

  return menor


}
console.log(encontrarMenor( edades ))

// Obtener en un nuevo array las edades menores a 30.

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
  ]

  let arrSueldos = []
  let arrCorrientes = []
  let creadorArr2 = ( arr )=>{

    for (let i = 0; i < arr.length; i++) {
      
      if( arr[i].tipoCuenta === "sueldo"){
        arrSueldos.push( arr[i] )
      }else if(arr[i].tipoCuenta === "corriente"){
        arrCorrientes.push( arr[i] )

      }
      
    }
  
  }
  creadorArr2(arrayCuentas)

  console.log(arrSueldos)
  console.log(arrCorrientes)

