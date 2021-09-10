// Manipulando Strings e Números

// Transformando um número quebrado com 2 casas decimais e trocar ponto por vírgulas

let number = 43.1290
console.log(number.toFixed(2).replace(".", ","))

console.log(Number(number.toFixed(2)))