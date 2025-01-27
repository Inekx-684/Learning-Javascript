//capacidades que tienen las funciones al igual que otros objetos

//1. pasar funciones como argumentos (callback)

//function a(){}
//function b(a){}
//b(a)

//retornar funciones
//function a(){
//     function b(){}
//     return b
// }

//asignar funciones a variables => epresion de fucnion
// const a = function(){}//el nombre de la funcion desaparece y queda a cargo de la variable que se le asigno


//las funciones pueden tener propiedades y metodos

// function a(){ }
// const obj = {}
// a.call(obj)

//anidar funciones nested functions

// function a(){
//     function b(){
//         function c(){}
//         c()
//     }
//     b()
// }
// a()

//es posible almacenar funciones en objetos?

const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage(){
        console.log('fire')
    }
}

rocket.launchMessage()