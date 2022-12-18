// Instruções para a realização dos exercícios
// Todos os exercícios contêm um código-base. Você deverá copiar esse código e salvá-lo em um arquivo nomeado conforme o número do exercício. Por exemplo, o exercício 1 deve ser salvo no arquivo exercise1.js, e assim por diante.

// 🚀 Se liga nesse foguete!

// Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação, mas fique de olho nesses! 👀

// =================

// Exercício 3
  // Escreva a função personLikes, que recebe como parâmetro os objetos alex ou gunnar. Cada objeto representa uma pessoa, e a função deve retornar todos os gostos daquela pessoa, conforme mostrado abaixo:

// name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = (person) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
// <nome> tem <anos de idade> e gosta de <gostos da pessoa>


// Retornos esperados:
const destAlex = {name, age, likes, nationality} = alex;
console.log(personLikes(alex)); 
// 'Alex is 26 years old and likes fly fishing.'

const destGunnar = {name, age, likes: [...likes], nationality} = gunnar;
console.log(personLikes(gunnar)); 
// 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'