

// console.log( numerosQuiniela[0] )
// console.log( numerosQuiniela[1] )
// console.log( numerosQuiniela[2] )
// console.log( numerosQuiniela[3] )

// let resultadoSumaNumeros = 0
//     resultadoSumaNumeros = 12
//     resultadoSumaNumeros = 28
//     resultadoSumaNumeros = resultadoSumaNumeros + numerosQuiniela[2]
//     resultadoSumaNumeros = resultadoSumaNumeros + numerosQuiniela[3]

let numerosQuiniela = [ 12, 16, 22, 54]


function sumar(){

    let resultadoSumaNumeros = 0

    for( let i = 0; i < numerosQuiniela.length; i++ ){

        resultadoSumaNumeros = resultadoSumaNumeros + numerosQuiniela[i]
        console.log(resultadoSumaNumeros)
        
    }

    return resultadoSumaNumeros

}

sumar()


