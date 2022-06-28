

let gastos = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],// semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950],  // semana 4
];

  //TODO:  CREANDO UNA FUNCION REUTILIZABLE...
  // CALCULAR GASTO TOTAL DE LA TERCER SEMANA
  // UNICAMENTE SUMAR LOS MULTIPLOS DE 5

  const recorrerSemana = ( mat, numFila )=>{

    let acc = 0

    for (let i = 0; i < mat[numFila].length; i++) {
      
      if(mat[numFila][i] % 5 === 0){

        acc += mat[numFila][i]
      }
      
    }

    return acc

  }

  let gastoSemana3 = recorrerSemana(gastos, 2 )
  console.log(gastoSemana3)





  //TODO:  CREANDO UNA FUNCION REUTILIZABLE...
  // QUEREMOS SABER EL TOTAL DE LO QUE SE GASTO SUMANDO TOD´OS LOS DIAS SABADOS
  // PARA PODER SABER SI ESTUVO DE JODA O ESTUDIANDO
  // ¿COMO LO HARIAS?

 
  const sumadorGastosDiarios = ( mat, dia)=>{

    let acc = 0

    for (let i = 0; i < mat.length; i++) {
      
      acc += mat[i][dia]
      
    }

    return acc

  }

  let totalSabados = sumadorGastosDiarios(gastos, 5)
  console.log(totalSabados)

 

  //TODO:  CALCULAR EL TOTAL GASTADO DEL MES

  
  let gastos2 = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],// semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950],  // semana 4
  ];

  const recorrerMat =  mat =>{

    let acc = 0

    for (let i = 0; i < mat.length; i++) {

      for (let j = 0; j < mat[i].length; j++) {
        acc += mat[i][j]
        
      }
      
    }

    return acc

  }

  let totalMes = recorrerMat( gastos2 )
  console.log(totalMes)

  //TODO: CALCULAR EL GASTO TOTAL DE CADA SEMANA 
  // CREANDO UN ARRAY CON EL TOTAL DE CADA SEMANA
  // RETORNAR UN ARREGLO EJ: [10000, 7000, 4444, 1211]

  let gastos3 = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],// semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950],  // semana 4
  ];

  const totalSemanas =  mat =>{

    let arrSemanas = []
    let acc = 0

    for (let i = 0; i < mat.length; i++) {

      for (let j = 0; j < mat[i].length; j++) {
        acc += mat[i][j]
        
      }
        
      arrSemanas.push(acc)
      acc = 0
      
    }

    return arrSemanas

  }
  let arrSemanasTotales = totalSemanas(gastos)
  console.log(arrSemanasTotales)

  
  //TODO: REPORTAR CUAL FUE LA SEMANA EN QUE MAS SE GASTO y DE CUANTO FUE

  const mayorTotal = arr =>{

    let semana = 0
    let mayor = arr[0]
    for (let i = 1; i < arr.length; i++) {
    
      if( arr[i] > mayor){
        mayor = arr[i]
        semana = i
      }
      
    }

    let obj = {
      total: mayor,
      posicion: semana + 1
    }

    return obj

  }

let estadisticaSemana = mayorTotal(arrSemanasTotales)
console.log(estadisticaSemana)

  console.log(`la semana que mas se gasto es la semana ${estadisticaSemana.posicion}con un total de ${estadisticaSemana.total}`)
  
  
  //TODO:  CALCULAR CUAL FUE EL DIA QUE MAS SE GASTO Y DE CUANTO FUE
  // SI HAY MAS DE UN DIA CON EL MAYOR GASTO RETORNAR LA PRIMER COINCIDENCIA
  

  let cincox5 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
  ];

  let acc = 0

  for (let i = 0; i < cincox5.length; i++) {
    
    acc += cincox5[i][i]
    
  }
  console.log(acc)

  let secundaria = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
  ];

  let accSecundario = 0

  for (let j = 0; j < secundaria.length; j++) {
    
    accSecundario += secundaria[j][ secundaria.length - ( j + 1)]
    
  }