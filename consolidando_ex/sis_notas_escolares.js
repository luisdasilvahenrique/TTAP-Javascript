/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F
*/

// let gradeMax = 91
// let gradeMedium = 80
// let gradeLow = 70
// let gradeMinimumLow = 60
// let veryLow = 59

let nota = 59

if(nota >= 90){
    console.log('Resultado: A')
} else if(nota >= 80){
    console.log('Resultado: B')
} else if(nota >= 70 ){
    console.log('Resultado: C')
} else if(nota >= 60 ){
    console.log('Resultado: D')
} else{
    console.log('Resultado: F')
}
