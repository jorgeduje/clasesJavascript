
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

let banco = {

    clientes: arrayCuentas,
    consultarCliente: function( nombre ){
        let clienteEncontrado = false
        let error = "El cliente no fue encontrado"
        for(let i = 0 ; i < this.clientes.length; i++){
            if( this.clientes[i].titularCuenta  === nombre){
                clienteEncontrado = this.clientes[i]
            }
        }
        return clienteEncontrado ? clienteEncontrado : error
    },
    deposito: function(nombre, cantDeposito){

        let clienteEncontrado = this.consultarCliente(nombre)
        let mensaje = ""
            if( typeof clienteEncontrado !== "string" ){
                
                clienteEncontrado.saldoEnPesos += cantDeposito
                mensaje = `Depósito realizado, su
                nuevo saldo es ${clienteEncontrado.saldoEnPesos}`

            }else{
                mensaje = "cliente no encontrado, no se puedo realizar el deposito"
            }
        console.log(mensaje)
        
    }

}

console.log( banco.consultarCliente("Jacki Shurmer") )

banco.deposito("Jacki Shurmer", 10000)


