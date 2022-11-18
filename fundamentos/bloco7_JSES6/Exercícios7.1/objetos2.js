// Agora, suponha que, após terminar de adicionar o sobrenome (lastName) das pessoas nos objetos, a sua liderança te enviou uma mensagem informando que seria necessário adicionar também a naturalidade, a data de nascimento e o estado civil.
// Em primeiro lugar, você poderia declarar variáveis que armazenassem as informações necessárias para adicionar ao objeto. 

// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// // cria a variável que salva o nome da chave
// let newKey = 'lastName';

// // cria a variável que salva o valor da chave
// const lastName = 'Ferreira';

// // cria a nova chave com o valor da variável lastName
// customer[newKey] = lastName;

//==================================================================================

// Agora você pode criar uma função responsável por adicionar novas propriedades a um objeto. Essa função deve receber três parâmetros:

// - Um objeto;
// - Uma propriedade nova a ser adicionada;
// - O valor dessa propriedade.

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';

const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
  objeto[novaPropriedade] = valor;
};
//esta função vale ouro

adicionaPropriedade(customer, 'peso', 87);

console.log(customer);