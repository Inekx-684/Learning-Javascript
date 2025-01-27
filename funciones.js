function calculeDiscount(price, discount){
    const dis = (price * discount) / 100
    const precioFinal = price -dis
    return precioFinal
}

const price = 100
const discount = 20
const finalPrice = calculeDiscount(price,discount)

console.log(`precio original = ${price}, el precio con descuento del ${discount} es: ${finalPrice}`)