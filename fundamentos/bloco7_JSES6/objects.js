
// // objeto customer, possui pares chave-valor
// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// // para adicionar novas propriedades a um objeto podemos reescrevê-lo ou usar 
// // objeto.nomeDaPropriedade.

// // objeto[variavelQueContemONomeDaPropriedade].

// customer.lastname = 'Farias';
// console.log(customer);





const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;

newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;

console.log(customer);



// ========================================
// ========================================
// ========================================

// Objetos são um dos tipos de dados em JavaScript que possuem uma estrutura de chave e valor. 
// const coolestTvShow = {
//   name: 'BoJack Horseman',
//   genre: 'adult animation',
//   createdBy: 'Raphael Bob-Waksberg',
//   favoriteCharacter: 'Princess Carolyn',
//   quote: 'Princess Carolyn always lands on her feet.',
//   seasons: 6,
// };
// a vírgula separa cada par. A última, depois do último elemento, é opcional

// os objetos permitem o uso da estrutura de repetição 'for.. in'

const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

// for (const property in coolestTvShow) {
//   console.log(property);
// }


// de forma mais simples
console.log(Object.keys(coolestTvShow));

// Object.keys exibe um array contendo as chaves do objeto, cada uma como uma string

// ========================================
// ========================================
// ========================================


// Tente criar uma função que exiba as habilidades do objeto student. Cada habilidade deve ser exibida no formato “Nome da habilidade, Nível: valor da chave referente à habilidade”. Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução.

// Object.values mostra os valores que são relacionados às chaves, com o seu tipo original, ou seja, se são números, eles vêm em forma de números

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

  console.log(student1)

  // =========================================
  // =========================================
  // =========================================

 // object entries
 // esse comando monta um array no qual os elementos são os pares do objeto
 const coolestTvShow1 = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};
console.log(Object.entries(coolestTvShow1));
// abertura do array de saída (6 elementos)
// [ 
//   [ 'name', 'BoJack Horseman' ],
//   [ 'genre', 'adult animation' ],
//   [ 'createdBy', 'Raphael Bob-Waksberg' ],
//   [ 'favoriteCharacter', 'Princess Carolyn' ],
//   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
//   [ 'seasons', 6 ]
// ] 
// fechamento do array de saída

// cada elemento desse array é um array com 2 elementos, a chave e o valor. Então a saída é um array de arrays, onde o primeiro elemento (a chave) é sempre uma string, e o segundo elemento vai ser o tipo que ele for realmente, como um número, por exemplo.




// =========================================
// =========================================
// =========================================

 // DUAS FORMAS DE FAZER

 const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);
for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};
// gostei muito dessa segunda forma

