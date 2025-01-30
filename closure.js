//funcion que tiene acceso a variables de un ambito externo,
// incluso si la funcion ya ha terminado de ejecutarse.

// Ambito Lexico: Cada vez que se declara una funcion crea 
// su propio ambito lexico y puede acceder a las variables dentro
// de este ambito y a las variables en ambitos superiores.

function outerFunction(){
    let outerVariable = "I am from outer function"

    function innerFunction(){
        console.log(outerVariable)//Estamos agarrando una variable
        // fuera del bloque en el que estamos osea que debe funcionar.

    }

    return innerFunction()
}

outerFunction()

// const closureExample = outerFunction()
// console.log(closureExample)

//CLOSURE ES CUANDO SE PUEDE ACCEDER A VARIABLES EXTERNAS

function createCounter(){
    let count = 0

    return function (){
        count ++
        console.log(count)
    }
}

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()//aqui el contador falla por problemas de memoria
// al estar asignado a una variable diferente
// almacenando valores en una variable diferente

function outer(){
    let message = "Hello, "
    function inner(name){
        console.log(message + name)
    }

    return inner
}

const closureA = outer()

const closureB = outer()

closureA("Alicia")
closureA("Bob")