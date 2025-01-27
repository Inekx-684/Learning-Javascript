/* for in sirve para iterar en objetos inumerables como objestos
propiedades = valor

array, string 
for(variable in objeto){
codigo
}

*/

const ListaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
}

for(fruta in ListaDeCompras){
    console.log(fruta)
}

for(fruta in ListaDeCompras){
    console.log(`${fruta} : ${ListaDeCompras[fruta]}`)
}