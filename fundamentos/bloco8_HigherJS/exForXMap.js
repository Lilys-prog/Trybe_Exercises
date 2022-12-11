// FOR

const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

                // const fullNames = [];

                // for (let index = 0; index < persons.length; index += 1) {
                //   fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
                // }

                // console.log(fullNames);



// MAP

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]


// O for foi substituído por apenas uma linha de código.

// A função juntou o primeiro nome com o sobrenome de cada pessoa e retornou um array novo com cada um dos valores. Observe que o tamanho dos arrays persons e fullNames é o mesmo (3 elementos).