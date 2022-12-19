// Instruções para a realização dos exercícios
// Todos os exercícios contêm um código-base. Você deverá copiar esse código e salvá-lo em um arquivo nomeado conforme o número do exercício. Por exemplo, o exercício 1 deve ser salvo no arquivo exercise1.js, e assim por diante.

// 🚀 Se liga nesse foguete!

// Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação, mas fique de olho nesses! 👀

// =================

// 🚀 Exercício 4
  // Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
  // (bornIn: nascido em)

  const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },   
  ];
  
  // Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20
  // escreva filterPeople abaixo

const person = { name, nationality, bornIn } = people;

const filterPeople = (people) => {
  return people.filter((person) => {
    return person.nationality === 'Australian' && (person.bornIn > 1900 && person.bornIn < 2001);
  });  
}

console.log(filterPeople(people));

