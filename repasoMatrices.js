

let gastos = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],// semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950],  // semana 4
];

  //TODO:  CREANDO UNA FUNCION REUTILIZABLE...
  // CALCULAR GASTO TOTAL DE LA TERCER SEMANA SUMANDO LOS MULTIPLOS DE 3

  const recorrerFila = ( mat, numFila )=>{

    let acc = 0

    for (let i = 0; i < mat[numFila].length; i++) {
     
      acc += mat[numFila][i]
      
    }

    return acc

  }

  let totalSemana3 = recorrerFila(gastos, 2)
  console.log(totalSemana3)



  let gastos2 = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],// semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950],  // semana 4
];


  //TODO:  CREANDO UNA FUNCION REUTILIZABLE...
  // QUEREMOS SABER EL TOTAL DE LO QUE SE GASTO SUMANDO TOD´OS LOS DIAS SABADOS
  // PARA PODER SABER SI ESTUVO DE JODA O ESTUDIANDO
  // ¿COMO LO HARIAS?

  const recorrerCol = ( mat, numDia )=>{

    let acc = 0

    for (let i = 0; i < mat.length; i++) {
      
      acc += mat[i][numDia]
      
    }

    return acc

  }

  let totalSabados = recorrerCol(gastos2, 5)
  console.log(totalSabados)


  let gastos3 = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],// semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950],  // semana 4
];

  //TODO:  CALCULAR EL TOTAL GASTADO DEL MES

  const recorrerGastos = mat =>{

    let acc = 0

    for (let i = 0; i < mat.length; i++) {
     
      for (let j = 0; j < mat[i].length; j++) {
        
        acc += mat[i][j]
        
      }
      
    }

    return acc

  }

  let totalGastos = recorrerGastos(gastos3)
  console.log(totalGastos)


  //TODO: CALCULAR EL GASTO TOTAL DE CADA SEMANA 
  // CREANDO UN ARRAY CON EL TOTAL DE CADA SEMANA
  // RETORNAR UN ARREGLO EJ: [10000, 7000, 4444, 1211]

  let gastos4 = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],// semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950],  // semana 4
];
  const calcularSemanas = mat =>{

    let arraySemanas = []
    let acc = 0

    for (let i = 0; i < mat.length; i++) {
     
      for (let j = 0; j < mat[i].length; j++) {
        
        acc += mat[i][j]
        
      }

      arraySemanas.push( acc )
      acc = 0
      
    }

    return arraySemanas

  }

  let semanas = calcularSemanas(gastos)
  console.log(semanas)

  
  //TODO: REPORTAR CUAL FUE LA SEMANA EN QUE MAS SE GASTO y DE CUANTO FUE
  
  let obj = {
    total: null,
    posicion: null
    
  }

  let calcularMayor = ( arr )=>{

    let mayor = arr[0]
    let posicion = 0

    for (let i = 1; i < arr.length; i++) {

      if( arr[i] > mayor){
        mayor = arr[i]
        posicion = i
      }
      
    }

    console.log(posicion)
    obj.total = mayor
    obj.posicion = posicion
  }

  let reporteSemana = calcularMayor(semanas)
  console.log( `la semana que mas se gasto fue la semana ${obj.posicion + 1} 
  que esta en la posicion ${obj.posicion} 
  y fue de un total de ${obj.total}`)

 
  
  
  //TODO:  CALCULAR CUAL FUE EL DIA QUE MAS SE GASTO Y DE CUANTO FUE
  // SI HAY MAS DE UN DIA CON EL MAYOR GASTO RETORNAR LA PRIMER COINCIDENCIA
  
