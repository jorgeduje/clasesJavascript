
// 😄 OBJETOS LITERALES 😄

// let arr = []
// let obj = {}

// ESTAN COMPUESTOS POR PROPIEDADES Y METODOS
    // PAR DE CLAVE : VALOR 

let perro = {

    nombre: "pepito",
    raza: "callejero",
    edad: 2,
    ladrar: function(){
        return "guau guauuu"
    },
    saltar: function(){
        return "estoy saltando"
    },
    decirEdad: function (){
        return this.edad
    },
    color: "marron"

}


console.log( perro.decirEdad() )

console.log(perro)

perro.nombre = "pepito"
perro.color = "marron"

console.log(perro)

// OBJETO PERSONA QUE TENGA NOMBRE, APELLIDO, EDAD, NOTAS, CALCULARPROMEDIO

let promediar = function(){
    let acc = 0
    for( let i = 0; i < this.notas.length; i++){
        acc += this.notas[i]
    }
    return acc / this.notas.length
}

// console.log(persona.calcularPromedio())
// console.log(persona2.calcularPromedio())


let arr = [2, 25, 12]

let personas = [

    {

        nombre: "maria",
        apellido: "perez",
        edad: 30,
        notas: [10, 9, 8],
        calcularPromedio: promediar
    },
    {
        nombre: "juanctio",
        apellido: "perez",
        edad: 30,
        notas: [5, 2, 10],
        calcularPromedio: promediar
    }
]


for(let i = 0; i < personas.length; i++){
    console.log( `${personas[i].nombre} tiene un promedio de ${personas[i].calcularPromedio()}` )
}

