
// declarando uma função anônima
// const printName = function () {
//   const myName = 'Lucas';
//   return myName;
// };

// console.log(printName());

// Uma das aplicações para arrow functions é em funções anônimas. Chamamos funções sem um nome específico de funções anônimas, como a função acima.

// Em Javascript, é muito comum não precisarmos nomear funções, como mostrado no exemplo acima. Isso pode acontecer quando criamos funções que não serão reutilizadas, ou que serão passadas como argumento para uma outra função. Chamamos funções sem um nome específico de funções anônimas.

// =============================================================

// As arrow functions nada mais são do que uma forma diferente de declarar funções escrevendo menos código. Veja abaixo como ficaria a função printName utilizando a sintaxe da arrow function:

// const printName = () => {
//   const myName = 'Lucas';
//   return myName;
// };

// console.log(printName());

// em comparação à primeira, não se usou a palavra 'function' e adicionou-se uma 'flecha' entre os () e a {}

// =====================================================================

// Quando não há nada no corpo da função além do que será retornado, a sintaxe da arrow function nos permite simplificar ainda mais a função printName omitindo o return e as chaves:
const printName = () => 'Lucas';
console.log(printName());

//Mas lembre-se de que podemos omitir os parênteses de parâmetro apenas em um cenário:
//Quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));
// mas essa omissão é opcional

// função comum
function contaPalavras (frase) {
  return frase.split(' ').length;
}
console.log(contaPalavras('Fala tribo, beleza?'));

// mesma função, como arrow
const contaPalavras = frase => frase.split(' ').length;
console.log(contaPalavras('Fala tribo, beleza?'))


// função comum que cria um objeto
function objetoPessoa (nome, idade) {
  return {
    nome: nome,
    idade: idade
  }
}
console.log(objetoPessoa('Joaquim', 25));


// arrow function que cria o mesmo objeto
const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});  // parênteses
console.log(objetoPessoa('Joaquim', 25));
// é necessário colocar o objeto dentro de parênteses para que a função entenda que se trata de um objeto e não do corpo da função entre chaves


//============================

// Em funções que recebem mais de um parâmetro, os parênteses obrigatoriamente não são omitidos:
const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));







// ================================================================
// OPERADOR TERNÁRIO + ARROW FUNCTIONS

// A sintaxe básica do operador ternário é muito simples:
// `expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira

// Situação em que é mais simples usar o operador ternário:
// const checkIfElse = (age) => {
//   if (age >= 18) {
//     return `Você tem idade para dirigir!`;
//   } else {
//     return `Você ainda não tem idade para dirigir...`;
//   }
// };
// console.log(checkIfElse(17));

// const checkTernary = (age) => (
//   age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
// )
// console.log(checkTernary(18));


// Situação em que usar o operador ternário não faz muito sentido:
const checkIfElse = (fruit) => {
  if (fruit === `maçã`) {
    return `Essa fruta é vermelha`;
  } else if (fruit === `banana`) {
    return `Esta fruta é amarela`;
  } else {
    return `Não sei a cor`;
  }
};
console.log(checkIfElse('maçã'))


const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha` 
  : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);

console.log(checkTernary(banana))

// Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
// pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
// operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
// no futuro!





// ====================================================================


// uma outra forma de usar duas sentenças verdadeiras para um resultado único é usando o operador &&
let idade = 21;
console.log(idade >= 18 && 'Você já pode dirigir');
// no caso da idade ser menor do que 18, a sentença retornará o boolean 'false' como resposta. Desta forma, essa simplificação ajuda ainda mais o código e traz a resposta adequada