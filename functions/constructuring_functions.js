/*

    Function() constructor

    * expressão new
    * crar um novo objeto 
    * this keyword

*/

function Person(name) {
    this.name = name
    this.walk = function(){
        return this.name + " Está andando"
    }
}
const luis = new Person('Luis')
const joao = new Person('João')
console.log(luis.walk())
console.log(joao.walk())

// outra coisa
let date = new Date('2021-09-09')
console.log(date)