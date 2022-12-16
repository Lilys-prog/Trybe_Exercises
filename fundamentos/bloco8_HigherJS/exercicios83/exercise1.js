// A empresa em que você trabalha fechou um contrato com uma biblioteca e você está responsável por desenvolver o novo sistema para organizar os livros. O acervo que a biblioteca possui está descrito no array abaixo:

const { array } = require("yargs");

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

// Adicione o código do exercício aqui:

// 🚀 1 - Filtre todos os objetos do gênero ficção científica ou fantasia. (acertei!)


// const syfyPhant = books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

// console.log(syfyPhant);



//======================================================================================================================
//----------------------------------------------------------------------------------------------------------------------
//======================================================================================================================


// 🚀 2 - Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.

// De olho na dica 👀: para acessar o ano atual, pesquise sobre “como resgatar o ano atual com JavaScript” e use as funções filter e sort. (consegui a data atual e pegar os livros, acertei o sort decrescente)

// GABARITO PARA COLOCAR EM ORDEM CRESCENTE

// PARA PEGAR O ANO ATUAL
// const dataAtual = new Date();                       
// const anoAtual = dataAtual.getFullYear();

// PARA ORDENAR, MAS TÁ VINDO DECRESCENTE
//const order = ((a, b) => a - b);

// GABARITO PARA ORDEM CRESCENTE COM O SORT
// O filter retorna um array com os livros que possuem mais de 60 anos e, para ordená-los do mais velho para o mais novo, você pode utilizar o método sort.
// O sort vai receber dois parâmetros, realizar a comparação dos itens do array e organizar o array do livro mais velho para o mais novo.
// 

// PARA PEGAR OS LIVROS
// const sexagenario = () => {
//   return books
//   .filter((book) => (anoAtual - book.releaseYear) >= 60)
//   .sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
// }
// console.log(sexagenario());

// não estava usando só o releaseYear pra ordenar, estava tentando usar a conta, por isso não dava certo.
// OBS: para fazer o esquema de começar as linhas com as HOFs e o ponto, não se põe ';' no fim delas até que se ponha todas as que se quer usar. Ou seja, só a últimmma usa ';', como se fosse uma frase contínua.


//======================================================================================================================
//----------------------------------------------------------------------------------------------------------------------
//======================================================================================================================


// Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.

// GABARITO
// 1º passo: utilize o filter para encontrar os livros escritos por pessoas que nasceram no ano armazenado no parâmetro birthYear.
// 2º passo: mapeie os livros para uma lista contendo apenas os nomes.


// const booksByAuthorBirthYear = (birthYear) => {
//   return books
//   .filter((book) => birthYear === book.author.birthYear)
//   .map((book) => book.name);
// }
// console.log(booksByAuthorBirthYear(1920));



//======================================================================================================================
//----------------------------------------------------------------------------------------------------------------------
//======================================================================================================================




// 🚀 4 - Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.
// CONSEGUIIIIIIII

// const syfyPhantAut = books
// .filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
// .map((book) => book.author.name)
// .sort();
// console.log(syfyPhantAut);




//======================================================================================================================
//----------------------------------------------------------------------------------------------------------------------
//======================================================================================================================


// CONSEGUIIIIIIIIII

// 🚀 5 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

// const dataAtual = new Date();                       
// const anoAtual = dataAtual.getFullYear();

// const less60 = books
// .filter((book) => (anoAtual - book.releaseYear) < 60).map((book) => book.name);
// console.log(less60);




//======================================================================================================================
//----------------------------------------------------------------------------------------------------------------------
//======================================================================================================================



// 🚀 6 - Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.

// GABARITO PQ NUNCA VI UMMA DESSAS

// 1º passo: filtre o nome que tenha três pontos. Para isso, devemos localizar os pontos e adicionar em uma condicional no filter.
      // O primeiro vem no índice 1, após ele temos um espaço, outra letra e então o outro ponto, no índice 4. O terceiro ponto segue a mesma lógica e fica no índice 7.
// 2º passo: acesse o índice do elemento.
      // Agora temos um array com um livro, mas queremos somente o nome do livro. Vamos acessar o índice desse elemento, e então a chave name. 

                        // const authorWith3DotsOnName = () => {
                        //   return books.filter((book) => (
                        //     book.author.name[1] === '.'
                        //     && book.author.name[4] === '.'
                        //     && book.author.name[7] === '.'
                        //   ))[0].name;
                        // }
                        // console.log(authorWith3DotsOnName());

// apesar de ter só um elemento no array, é preciso colocar o [0] para identificá-lo.
// EU NUUUUUUNCA IA PENSAR NESSA SOLUÇÃO DE CIMA. VEJAMOS A OUTRA OPÇÃO DE SOLUÇÃO (QUE EU TAMBÉM NUUUUUUUNCA PENSARIA SOZINHA):

//-----------------------

// 1º passo: separamos o nome das pessoas autoras por espaços.
// 2º passo: filtramos então cada elemento divido por espaço. Se tivermos ao menos 3 elementos que terminem com “.”, retornamos o nome do livro.

                        // const authorWith3DotsOnName = () => {
                        //   return books.find((book) => (
                        //     book.author.name.split(' ')
                        //     .filter((word) => word.endsWith('.')).length === 3
                        //     )).name;
                        // }
                        // console.log(authorWith3DotsOnName());





//======================================================================================================================
//----------------------------------------------------------------------------------------------------------------------
//======================================================================================================================





