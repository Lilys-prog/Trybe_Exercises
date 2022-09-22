
// declarando uma função anônima
// const printName = function () {
//   const myName = 'Lucas';
//   return myName;
// };

// console.log(printName());

// Uma das aplicações para arrow functions é em funções anônimas. Chamamos funções sem um nome específico de funções anônimas, como a função acima.

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

//Mas lembre-se de que podemos omitir os parênteses apenas em um cenário:
//Quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

//============================

// Em funções que recebem mais de um parâmetro, os parênteses não são omitidos:
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