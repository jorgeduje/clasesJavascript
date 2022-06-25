
// TODO: 

let gastos = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],// semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950],  // semana 4
];

  // CREANDO UNA FUNCION REUTILIZABLE...
  // CALCULAR GASTO TOTAL DE LA TERCER SEMANA

  const calcularSemanaX = ( mat, posSem)=>{

    let acc = 0

    for (let i = 0; i < mat[posSem].length; i++) {
     
      acc += mat[posSem][i]
      
    }

    return {
      total: acc,
      posSem: posSem
    }
    
  }
  let totalSemana3 = calcularSemanaX(gastos, 2 )
  console.log(`en la semana numero ${totalSemana3.posSem + 1} que esta en la posicion ${totalSemana3.posSem} 
  se gasto ${totalSemana3.total} pesos`)
  // console.log(totalSemana3)

  
  // CREANDO UNA FUNCION REUTILIZABLE...
  // QUEREMOS SABER EL TOTAL DE LO QUE SE GASTO SUMANDO TOD´OS LOS DIAS SABADOS
  // PARA PODER SABER SI ESTUVO DE JODA O ESTUDIANDO
  // ¿COMO LO HARIAS?

  let gastos2 = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],// semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950],  // semana 4
];


  const recorrerDiaX = ( mat, posDia )=>{

    let acc = 0
    for (let i = 0; i < mat.length; i++) {
     
      acc += mat[i][posDia]
      
    }

    return {
      total: acc,
      posDia: posDia
    }

  }

  let totalDiaS = recorrerDiaX( gastos2 , 5 )
  console.log(`el total que se gasto en los dias ${totalDiaS.posDia + 1} que esta en la 
  posicion ${totalDiaS.posDia} es de ${totalDiaS.total}`)
  
  
  // CALCULAR EL TOTAL GASTADO DEL MES

  let gastos3 = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],// semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950],  // semana 4
  ];

  
  // CALCULAR EL GASTO TOTAL DE CADA SEMANA Y MOSTRARLO EN CONSOLA
  // CREAR UN ARRAY CON EL TOTAL DE CADA SEMANA
  
  [12, 43, 12, 55]

  
  // REPORTAR CUAL FUE LA SEMANA EN QUE MAS SE GASTO y DE CUANTO FUE
  
  
  
  // CALCULAR CUAL FUE EL DIA QUE MAS SE GASTO Y DE CUANTO FUE
  // SI HAY MAS DE UN DIA CON EL MAYOR GASTO RETORNAR LA PRIMER COINCIDENCIA
  

  // REPORTAR EL DIA DE LA SEMANA QUE MAS RECAUDACION HUBO


  const matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ]

  const matriz10x10 = () => {
    let matriz = []
    for (let i = 0; i < 10; i++) {
        matriz[i] = []
        for (let j = 0; j < 10; j++) {
            matriz[i][j] = i * 10 + j + 1
        }
    }
    return matriz
}
let mat10 = matriz10x10()
// console.table(mat10)

let recorrerPrincipal = ( mat )=>{

  let acc = 0

  for (let i = 0; i < mat.length; i++) {
    
    acc += mat[i][i]
    
  }

  return acc

}
console.log(recorrerPrincipal(mat10))
 
let recorrerSec = ( mat )=>{

  let acc = 0

  for (let i = 0; i < mat.length; i++) {
   
    acc += mat[i][mat.length - ( 1 + i)]
    
  }

  return acc

}

console.log(recorrerSec(mat10))