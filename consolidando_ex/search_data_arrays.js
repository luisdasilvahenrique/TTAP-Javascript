/*
    * Buscanddo e contando dados em Arrays
    Baseado no Array de linhas por Categorias abaixo, faça os seguintes livros em cada categoria

    * Contar o número de autores
    * Mostrar livros do autor Augusto Cury
    * Transformar a função aciima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                autor: 'T. Hart Eker'
            },
            {
                title: 'Pai rico, pai pobre',
                autor: 'George 5. Classon',
            },
        ],
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é Insubstituivel',
                autor: 'Augusto Cury',
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                autor: 'Augusto Cury'
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                autor: 'Stephen R. Covey',
            },
        ],
    },
];

const totalCategory = booksCategory.length

console.log(totalCategory)

for (let category of booksCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let author = [];

    for(let category of booksCategory){
        for(let books of category.books){
            if(author.indexOf(books.author) == -1){
                author.push(books.title)   
            }
        }
    }
    console.log("Total de autores: ", author.length)
}
countAuthors()

function booksOfAuthor(author){
    let books = [];

    for(let category of booksCategory){
        for(let book of category.books){
            if(book.autor === author){
                books.push(book.title)   
            }
        }
    }
    console.log(`Livros do autor ${author}:  ${books.join(", ")}`)
}
booksOfAuthor('Augusto Cury')