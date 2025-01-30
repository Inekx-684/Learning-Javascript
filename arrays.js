//los arrays son objetos que nos permiten guardar varios elementos o variables.

//formas de crear un array-- new Array() ro Array()

const fruits = Array('Mango', 'Banana', 'Orange')
console.log(fruits) 

//no se puede crear un solo numero
const justOneNumber = Array(12)
console.log(justOneNumber)// en este caso me muestra la posicion vacia

const numbers = Array(1,2,3,4,5)
console.log(numbers)

//2. Array literal sintax

const oneNumber = [4]//Esta es la forma de crear arrays de la forma literal
console.log(oneNumber)


//array vacio
const emptyArray = []
console.log(emptyArray)//para inicializar un programa o cuando queremos un array vacio e irlo llenando

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports)

// array mixtos
const recipeIngredients = [
    'flour',
    true,
    8,
    {ingredient: 'Milk', quantity: '1 cup'},
    false
]
console.log(recipeIngredients)

// como acceder a un array

const firstFruit = fruits[0]
console.log(firstFruit)

// tamaño de array
tamaño = fruits.length
console.log(tamaño)