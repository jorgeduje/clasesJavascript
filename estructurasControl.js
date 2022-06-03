
// ESTRUCTURAS DE CONTROL = DEFINIR EL FLUJO DE NUESTRA APP

// IF ELSE // varios caminos

let probarIf = ( numero )=>{

    if( numero > 6 ){
        console.log("ENTRO EN EL IF")
    }else if( numero === 6){
        console.log("ENTRO EN EL ELSE IF")
    }else{
        console.log("ENTRO EN EL ELSE")
    }

}

probarIf(2)


// TERNARIO // blanco o negro
// CONDICION ? "lo que va hacer si es true" : "lo que va hacer si es false"

let clima = "lluvioso"
let mamaSalgoConParagua = clima === "lluvioso" ? "si llevalo" : "no hace falta"
console.log(mamaSalgoConParagua)

// SWITCH CASE // MUCHOS CAMINOS

let decirSonidoAnimal = function( animal ){

    switch( animal ){
        case "gato":
            console.log("miauu")
            
        case "perro":
            console.log("guauu")
            break
            
        case "gallina":
            console.log("kikiriki")
            
        default:
            console.log("perdon no conozco ese animal")
    }

}
decirSonidoAnimal("perro") 


/*

¿Puede subir?

 En un parque de diversiones nos piden un programa para verificar si los pasajeros de
 la montaña rusa pueden subir al juego.
 Crear una función puedeSubir() que reciba dos parámetros: altura de la persona y 
 si viene acompañada. Debe retornar un string que indique si
 la persona puede subirse o no, basado en las siguientes condiciones:
 Debe medir más o igual de 1,40m y menos de 2 metros.
 Si mide menos de 1,40m hasta 1.20m, deberá venir acompañado.
 Si mide menos de 1,20m, no podrá subir ni acompañado.
 Modificar la función para impedir la subida al juego si la persona fue penalizada 
 por no respetar las normas y reglas del juego.

*/

const puedeSubir = (altura, vieneAcompañada)=>{

    let mensaje = ""

    if(altura >= 1.4 && altura < 2){
        mensaje = "puede subir"
    }else if(altura >= 1.2 && altura < 1.4 && vieneAcompañada){
        mensaje = "puede subir pero acompañada"
    }else{
        mensaje = "no puede subir"
    }
    return mensaje

}

let mensajeMontanaRusa = puedeSubir("hola", true)

