
// CICLOS / BUCLES / LOOPS 

// FOR / WHILE / DO WHILE
// INICIALIZACION / CONDICION / MODIFICADOR
// MOSTAR LOS NUMEROS DEL 1 AL 10

for( let i = 1 ; i <= 10 ; i++){

    // console.log(i)

}
// FUNCION QUE MUESTRE POR CONSOLA LOS NUMEROS DEL 1 AL 10 SOLO SI SON IMPARES
// CUANTOS IMPARES HAY DESDE  1 AL 10 retornar

const mostrarImpares = (numero)=>{

    // let acc = 0 
    let cantidadDeImpares = 0

    for(let i = 1 ; i <= numero; i++){

        if(i % 2 !== 0){
          cantidadDeImpares++
        }

    }
    return cantidadDeImpares
}

let resultado = mostrarImpares(10)
// console.log(resultado)

let i = 22
while(i <= 10){

    console.log(i)
    i++
}

// DO WHILE 

let j = 22

do{
    // BLOQUE 
    console.log(j)
    j
}
while( j <= 10)

// CREAR UN CICLO FOR QUE MUESTRE LOS NUMEROS 10 al 1

let k = 10
while(k >= 1){

    console.log(k)
    k--

}