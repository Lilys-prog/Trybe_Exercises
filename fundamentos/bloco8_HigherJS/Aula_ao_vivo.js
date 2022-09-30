// tipos de funções tradicionais

function layoutPage() {
  // função tradicional
}

const layoutPage = function() {
  // função anônima
}

const layoutPage = () => {
  // arrow function
}

// as funções existem para resolver pequenos problemas e retornar soluções

// Tipos de Parâmetros comuns:
// String
// Number
// Object
// Bool 
// Array 
// Undefined 

// Uma FUNÇÃO tb pode ser um parâmetro e ela será uma função 'callback' ou 'callback function'. A função que tiver outra função como parâmetro será uma HOF. Também será considerada uma hof uma função que tiver outra como retorno.
// addEventListener é uma hof integrada do js
// a função hof não tem 'controle' de quando a callback será executada, vai depender do código,, ou do evento de disparo


// =======================================================================
// =======================================================================
// =======================================================================


// aplicação em  um exemplo para observar a função sedo passada por parâmetro

// const person = {
//   name: 'Thainá',
//   lastName: 'Guimarães',
//   greet: (callback) => {
//     return callback();
//   }
// };

const greetingPeople = () => {
  return "Oláááááá,, enfermeira!";
}

// module.exports = {greeting, defaultGreeting, badMoodGreeting, loveGreeting, person}
