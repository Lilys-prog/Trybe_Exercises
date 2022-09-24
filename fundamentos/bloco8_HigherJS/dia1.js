// Em js pode-se atribuir uma função a uma variável, como no código abaixo
function sum (number1, number2) {
  return number1 + number2;
}
const sumVariable = sum;

console.log(sumVariable);
//  [Function: sum]

// a arrow function tb é uma função armazenada em uma variável
const sum = (number1, number2) => {
  return number1 + number2;
};

// =======================================================
// =======================================================

// funções tb podem ser passadas como argumentos para outras funções
const sayHello = () => {
  return ('hello trybers');
}
const printGreeting = (callback) => {
    console.log(callback());
}
printGreeting(sayHello);
// o 'callback' é uma função que chama a anterior de volta em forma de parâmetro

// =======================================================
// =======================================================

// uma função também pode retornar uma função de outra função
const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));