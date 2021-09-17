//for..in
let person = {
    name: 'luis',
    age: 20,
    weight: 56.60
}

for (let property in person){
    console.log(property)
    console.log(person[property])
}