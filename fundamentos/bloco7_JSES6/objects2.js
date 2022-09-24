// Object.assign
// Esse método é utilizado para copiar os valores de todas as propriedades de um ou mais objetos para um objeto destino.

// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

// ele semppre recebe pelo menos 2 parâmetros. O primmeiro será o objeto de destino e os demais serão aqueles objetos os quais se querem passar os dados para o ddestino.

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

// neste caso o objeto person recebeu os objetos info e family
// no caso de chaves repetidas, como aqui em 'age', o objeto destino ficará com a última informação recebida. No caso ele substituiu o '20' original pelo '23' do info

// o objeto retornado pelo método Object.assign é o próprio objeto destino, que foi alterado adicionando as novas propriedades. Se alguma alteração for feita em um deles, o outro tb será alterado automaticamente. Isso acontece pq ao criar uma nova variável para armazenar o retorno do método Object.assign, cria-se apenas um outro “caminho” para modificar ou acessar os dados do objeto destino. Então um é o outro.


// Para resolver esse problema, podemos passar como primeiro parâmetro do Object.assign um objeto vazio {} e armazenar seu retorno em uma nova variável:


const person2 = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const pizza = {
  sabor: 'Marguerita',
}

const newPerson = Object.assign({},person2,lastName, pizza);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person2);

//foi feita a alteração de Roberto para Gilberto, sem que o Roberto fosse alterado no objeto original