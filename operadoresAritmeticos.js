const entero = 42
const decimal = 3.14

console.log(typeof entero, typeof decimal)//muestra el tipo de dato

//notacion cientifica

const cientifico = 5e3

//infinitos y NaN
const infinito = Infinity
const noEsUnNumer = NaN

//operaciones aritmeticas

//suma resta multiplicacion, division

const suma = 4+4
resta = 3-2
multiplicacion = 4*7
const division = 16/2


//modulo y exponenciacion

const modulo = 15 % 8
const exponenciacion = 2**3

//problemas de precision

const resultado = 0.1+ 0.2
console.log(resultado)//sale con muchos numeros y un 4 al final
console.log(resultado.toFixed(1))//recorta los numeros despues del 0, queria solo un numero despues del 0
console.log(resultado === 0.3)//tres iguales verifican tanto el numero como el tipo de dato pero no es lo mismo precisamente por la presicion


//operaciones avanxadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()

console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)

