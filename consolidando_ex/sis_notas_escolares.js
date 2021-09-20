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

let score = 78

if(score >= 90){
    console.log(`Nota: ${score} Resultado: A`)
} else if(score >= 80){
    console.log(`Nota: ${score} Resultado: B`)
} else if(score >= 70 ){
    console.log(`Nota: ${score} Resultado: C ` )
} else if( score >= 60 ){
    console.log(`Nota: ${score} Resultado: D ` )
} else{
   console.log(`Nota: ${score} Resultado: F ` )
} 
