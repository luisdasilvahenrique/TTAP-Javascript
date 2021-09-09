function MyName(name, age, Weight, vazio , never){
    this.name = name
    this.age = age
    this.Weight = Weight
    this.vazio = vazio
    this.never = never
}

const luis = new MyName('Luis', 20, 58.6, '')
const pedro = new MyName('Pedro', 18, 57.9, '')
console.log(luis, pedro)