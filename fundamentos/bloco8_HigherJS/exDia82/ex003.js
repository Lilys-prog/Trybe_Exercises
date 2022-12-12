// Nos exercícios a seguir, você trabalhará com uma estrutura de dados representando uma lista de livros, contendo informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.

// Em cada exercício, será pedido que você encontre ou produza alguma informação a respeito dessa lista utilizando as funções que você aprendeu hoje. Todos os exercícios contêm um código-base. Você deverá copiar esse código e salvá-lo em um arquivo nomeado conforme o número do exercício, completando a função vazia.

// template

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Construa um array de objetos a partir do array de livros.
// Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha.


// RESOLUÇÃO DO GABARITO

// 1º passo: faça um map e crie um objeto para cada iteração.
      // Ao retornar um objeto em uma arrow function, os parênteses são obrigatórios! Por exemplo: () => ({ chave: valor }).
// 2º passo: Adicione ao objeto as propriedades author e age.
// 3º passo: adicione os valores das propriedades dos objetos
// 4º passo: ordene o array por idade crescente

const nameAndAge = () => {
  return books
    .map((book) => (               // parênteses obrigatórios ao redor da chave do objeto, sem isso vc não está criando um objeto, mas abrindo um bloco da arrow function, então a função fica "confusa" sobre o que é pra fazer
      {
        author: book.author.name,
        age: book.releaseYear - book.author.birthYear,
      }
      ))
      .sort((obj1, obj2) => obj1.age - obj2.age);   // fornecer qual é a chave que se está usando pra ordenar ou ela vai usar o unicode e ficar "bagunçado"   
}
console.log(nameAndAge());