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
// quando não se coloca os parâmetros de uma função (mesmo os () vazios) é pq não se quer que a função seja executada no momento em que a linha for lida. Ela tem alguma condição qque deve ser preenchida (tipo um evento) e não pode ser chamada imediatamente, tem qque esperar. Daí a exclusão dos parẽnteses de argumento (mesmo se a função não pedir argumento e for ()).

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


// greetingPeople() não é uma hof, pois não tem função nem no papel de parâmetro e nem no de retorno
const greetingPeople = () => {
  return "Oláááááá,, enfermeira!";
}

module.exports = {greetingPeople};
// module.exports = {greeting, defaultGreeting, badMoodGreeting, loveGreeting, person}
