// vários pequenos exercícios usando o mesmo template de código

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


// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Podemos utilizar o método find sobre o array books, e para cada livro verificamos se o ano de nascimento da pessoa autora é 1947. A HOF irá encerrar o ciclo assim que achar o primeiro caso de sucesso e retorná-lo.

const authorBornIn1947 = () => {
  return books.find((book) => book.author.birthYear === 1947).author.name;
  };


  // -----------------------------------------------


// Retorne o nome do livro com menor número de caracteres (menor nome).
// 1º passo: Declare a variável nameBook sem nenhum valor.
// 2º passo: Aplique a condicional if utilizando operadores lógicos. O primeiro operador é o not (!) antes de nameBook. 
        // Fazemos isso porque, 
        // >>>>>>>>>> como a variável nameBook não guarda nenhum valor, ela retorna undefined por padrão, e consequentemente o JavaScript a interpreta como um valor falsy <<<<<<<<<<<<, 
        // que se traduz como false. Desta maneira, ao utilizar o operador not (!) antes de nameBook, você nega que ele seja falso, ou seja, converte-o para true.
// 3º passo: Utilize o operador or (||) para compor a lógica de nameBook. Se nameBook retornar true ou se o tamanho da string contida na chave >>>>>>> name <<<<<<<< de cada objeto em books for menor que o tamanho de nameBook, a função deverá guardar o nome desse livro em nameBook.

// const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      namebook = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}


 // -----------------------------------------------


// // Encontre o primeiro livro cujo nome possua 26 caracteres.
// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

const getNamedBook = () => books.find((book) => book.name.length === 26);
// resolvi sozinha


 // -----------------------------------------------


// // Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.

// const expectedResult = false;

const everyoneWasBornOnSecXX = () => books.every((book) => book.author.birthYear >= 1900 && book.author.birthYear <= 2000);
  

 // -----------------------------------------------


// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

// const expectedResult = true;

const someBookWasReleaseOnThe80s = () => books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
  


 // -----------------------------------------------


 // Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.

// const expectedResult = false;
// GABARITO

// 1º passo: Primeiro vamos entender que precisamos de dois métodos aqui. 
    // O primeiro vai iterar sobre o array books e irá comparar cada livro do array com os demais, porém para fazer essa comparação a cada outro livro precisaremos de um outro método iterando sobre o array.
    // O segundo método carregará a lógica, e então irá verificar se existe ao menos um caso em que a idade seja igual. Esse segundo método será um every, pois como ele fará o mesmo loop para cada livro, todos os resultados devem retornar o mesmo. 

// 2º passo: Implementamos a nossa lógica do some. Aqui veremos se o birthYear é o mesmo.

// 3º passo: Como estamos iterando duas vezes sobre o mesmo array, acaba acontecendo que comparamos o mesmo índice do array. Outra coisa que pode acontecer também é termos o mesmo autor para dois livros diferentes. Vamos então criar uma regra para que o nome do autor não possa ser igual nas comparações.

// 4º passo: a única coisa que faltou é que nossa lógica está invertida. Devemos retornar true caso NENHUM autor tenha nascido no mesmo ano. Podemos utilizar o ! que inverterá o valor retornado do nosso método some.


const authorUnique = () => {
  return books.every((book) =>
    !books.some((bookSome) =>
    (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)));
}