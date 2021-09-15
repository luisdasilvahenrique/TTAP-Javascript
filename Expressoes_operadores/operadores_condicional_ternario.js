// Operador Condicional (Ternário)

// Depedendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2 
// condition ? value1 : value2

// Exemplos
// Café da manhã top 
let pao = true
let queijo = false

const niceBreakFast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakFast)

// Maior de idade

let age = 21
const canDrive = age >= 18 ? 'Can drive' : 'Can not drive'

console.log(canDrive)