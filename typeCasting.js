//explicit type Casting

const string = "42"
const interger = parseInt(string)
console.log(interger)
console.log(typeof interger)

const stringDecimal = '3.14'
const float = parseFloat (stringDecimal)
console.log(float)
console.log(typeof float)

const binario = '1010'
const decimal = parseInt(binario, 2)//se pone la bariable y la base que es 2 en este caso
console.log(decimal)
console.log(typeof decimal)

//implicit type Casting
const sum = '5' + 3//convierte el 3 en string y lo concatena
console.log(sum)

const sumaBooleano =