/*
Falsy
Quando um valor é considerado false em contextos onde
um booleano é obrigatório ( condicioanais e loops )

false
0
-0
""
null
undefined
NaN
*/
console.log( 0 ? 'Verdadeiro' : 'falso' )

/*
Truthy
Quando um valor é considerado true em contexto onde
um booleano é obrigátorio (condicionais e loops)

true
{}
[]
1
3.23
"0"
"false"
"-1"
Infinity
-Infinity
*/

console.log( Infinity ? 'Verdadeiro': 'falso' )