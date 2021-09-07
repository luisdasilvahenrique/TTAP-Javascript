// 1°
let weight
// 2°
console.log(typeof weight)
// 3°
let name = 'Luis'
let age = 20
let Weight = 58.4
let isSubscribed = true
// 4°
let student = {
    name: 'Luis',
    age: 20,
    Weight: 58.4,
    isSubscribed: true
}
console.log(typeof student)
// 4.2°
console.log(`${student.name} tem idade de ${student.age} anos e pesa ${student.Weight}`)
// 5°
let students = [ student ]
// 6° 
console.log(students)
// 7° 
console.log(students[0])
// 8° 
const Peter = {
    name: 'Peter',
    age: 24,
    Weight: 68.4,
    isSubscribed: false
}
/*students = [
    student,
    Peter
]*/
students[1] = Peter
console.log(students)
// 9°
console.log(a)
var a = 1
// R - Ele vai mostrar o 1, sendo que o var é usado com variável global e independente da posição reconhece o valor.

// R_Correta - Ele vai mostrar o valor undefined, pois sofre o hoisting e o var a para para cima do console.log(), porém o console.log é executado primeiro.
