
// 😄 OBJETOS LITERALES 😄

// let arr = []
// let obj = {}

// COMPUESTOS POR PARES DE CLAVE Y VALOR 
// Y PUEDEN TENER PROPIEDADES Y METODOS ( CARACTERISTICAS Y ACCIONES )

let perro = {

    color: "marron",
    raza: "callejero",
    edad: 2,
    ladrar: function(){
        return "guauuu guauu"
    },
    saltar: function(){
        return "estoy saltando"
    },
    hijo: {
        nombre: "pepito"
    },
    decirColor: function(){
        return this.color
    }

}
console.log(perro.hijo.nombre)


console.log(perro)

perro.pelaje = "pelo corto"
perro.edad = 1
perro.hijo.nombre = "juanctio"
perro.darMano = function(x){
    
    return x
}
console.log(perro)

console.log(perro.darMano("hola como estas"))


console.log("-----------------------------------")
console.log("-----------------------------------")
console.log("-----------------------------------")

// CREAR UN ESTUDIANTE Y ASIGNARLE NOMBRE, EDAD, Y NOTAS
// ASIGNARLE UN METODO QUE DEVUELVA SU PROMEDIO

let promediar = function(){

    let acumulador = 0

    for(let i = 0; i < this.notas.length ; i++){
        acumulador +=   this.notas[i]
    }

    return acumulador / this.notas.length
}

let estudiantes = [
    {
        nombre: "juan quiroga",
        edad: 18,
        notas: [10, 9, 8, 5],
        calcularPromedio: promediar
    },
    {

        nombre: "victoria quiroga",
        edad: 18,
        notas: [1, 1, 10],
        calcularPromedio: promediar
    }

]


for (let i = 0; i < estudiantes.length; i++) {

    if(estudiantes[i].calcularPromedio() >= 7){
        console.log("aprobado")
    }else{
        console.log("desaprobado")
    }
    

}

