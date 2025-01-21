//primitivos

let nombre = "sofia"//string
let edad = 21//int
let esMayorDeEdad = true//booleano
let noHayValor = null//null
let noDefinido = undefined//normalmente lo da js
let simboloUnico = Symbol('unico')//simbolo unico
let numeroGrande = 2n//bigint


//complejos

let carro = {//objeto
    marca: "tesla",
    modelo:"Model S"
}

let frutas = [//array
    "manzana",
    "banano",
    "uvas"

]

function saludar(nombre){
    console.log("hola "+ nombre)
}
saludar(nombre)