/*
    new
        * left-hand-side expression
        * criar um novo objeto
*/

let name  = new String('Luis')
name.surName = 'Henrique'
let age  = new Number(20)
console.log(name, name.surName, age)

let date = new Date('2021-09-01')
console.log(date.__proto__)