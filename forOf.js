/* for of sirve para recorrer objetos iterables como arrays o strings

for(variable de objeto){
    codigo
}

*/

let canasta = ["Manzana", "Pera", "Uva"]

for (fruta of canasta){
    console.log(fruta)
}//solo funciona con objetos iterables

let palabra = "sofia"
for(letra of palabra){
    console.log(letra)
}