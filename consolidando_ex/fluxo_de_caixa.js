/*  ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []
    
Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

let family = {
   income: [50, 70, 75],
   expense: [45, 60, 5]
}

function sum(array){
   let sumTotal = 0;

   for (let value of array) {
       sumTotal += value
   }

   return sumTotal
}


function calculateBalance(){
    const calculateIncomes = sum(family.income)
    const calculateExpenses = sum(family.expense)
    
    const total = calculateIncomes - calculateExpenses

    balanceText = 'negativo'
    if (total >= 0) {
        balanceText = 'positivo'
    }
    console.log(`Seu saldo é ${balanceText}: ${total}`)
}
 calculateBalance()
 // estudar esse sistema