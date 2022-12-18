// Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.
    // Existem dois objetos referentes a uma pessoa usuária, um com informações pessoais e outro com informações referentes ao seu cargo na empresa trappistEnterprise. Você precisa criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.
    // Imprima no console uma frase utilizando os dados do objeto criado. Para isso, utilize a desestruturação de objetos em conjunto com template literals.


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

// resposta

const allData = { ...user, ...jobInfos };
console.log(allData);

// {
//     name: 'Maria',
//     age: 21,
//     nationality: 'Brazilian',
//     profession: 'Software engineer',
//     squad: 'Rocket Landing Logic',
//     squadInitials: 'RLL'
// }

const objData = { name, age, nationality, profession, squad, squadInitials } = allData;

console.log(`${name} is a ${nationality} ${profession}, who works on ${squad}.`);