const numeroSecreto = Math.floor(Math.random() *10 + 1);

const numeroJugador = parseInt(prompt('Adivina el numero secreto del 1 al 10'));

console.log('Este es el numero con el que juega'. $numeroJugador)

if(numeroJugador === numeroSecreto){
    console.log('Felicidades, adivinaste el numero secreto')
}else{
    console.log("Latima, perdiste")
}