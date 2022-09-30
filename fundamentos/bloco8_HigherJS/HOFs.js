// FUNÇÕES DE ORDEM SUPERIOR (HIGHER ORDER FUNCTIONS)

// são funções que usam outras funções em suas operações, devendo aceitá-las como parâmetro e/ou retorná-las

const button = document.querySelector('#signup-button');
const registerUser = () => {
  console.log('Registrado com sucesso!');
};
button.addEventListener('click', registerUser);

//Construímos uma função que simula o registro de uma nova pessoa e passamos como argumento de uma segunda função. Logo, addEventListener é uma HOF.



// =====================================================
// =====================================================
// =====================================================



// A HOF vai receber uma função como parâmetro ou retornar uma
// Construindo o conceito passo a passo


// HOFs nos permitem compactar ações e não somente repassar valores
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};
repeat(5, console.log);
// Construímos essa função para implementar um laço de repetição entre 0 e um número especificado via parâmetro (number) e para mostrar no console o valor da variável count de 0 a N (number).


// =====================================================
// =====================================================
// =====================================================



// para testar números pares
const repeat2 = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};
repeat2(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

//Pegamos a nossa implementação do exemplo anterior e repassamos dois parâmetros ao chamarmos a função repeat, sendo:

// 1 - Um número até que ponto gostaríamos de testar, neste caso 3;

// 2 - Nossa ação que será executada quando chamada action(count) na nossa função repeat, neste caso uma função para testar nossos números.

// Veja que nosso segundo parâmetro é uma função que recebe o count como argumento, proveniente da execução do nosso action(count) dentro da função repeat. Desse modo, caso o count passe pela condição estabelecida para ser um número par, será executada a mensagem com os números que atendem ao critério.



// =====================================================
// =====================================================
// =====================================================



// para testar números ímpares e pares
const repeat3 = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat3(3, isEven); // Testa quais números serão pares;
repeat3(3, isOdd); // Testa quais números serão ímpares;

// Observe que apenas transportamos e ajustamos a lógica para identificar os números pares e ímpares em duas novas funções chamadas isEven e isOdd. Após isso, só alteramos o segundo parâmetro ao chamar a função repeat.

// A função recebida como argumento pela HOF, também é conhecida por callback. No exemplo, repeat3 é uma HOF que recebe isEven ou isOdd como função callback.



// =====================================================
// =====================================================
// =====================================================


const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator);
// Math.random() é uma função que gera um número aleatório entre 0 e 1, sendo [0, 1[
// a função acima não funciona pq ao ser camada, a numberGenerator só foi escrita. Para funcionar, a linha deve ser 'console.log(numberGenerator()), pois isso gera a sua execução.
// É a mesma lógica usada em funções callback, para HOF



// =====================================================
// =====================================================
// =====================================================


// Lembre-se de que o fato de o JavaScript tratar funções como cidadãs de primeira classe nos permite inseri-las em variáveis.
// o addEventListener é uma HOF pq aceita 2 parâmetros, um será o evento (click, keyup, etc) e outro vai ser uma função. Ou seja, uma função no papel de parâmetro. A função que recebe outra como parâmetro ou como retorno é, por definição, uma HOF. A função que será usada como parâmetro ou retorno é chamada de 'callback'.

// Existem funções HOF que são padrão no JS e pode-se criar outras, próprias.

//
// EXEMPLO SEM HOF, PARA TRABALHAR:
//
const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;

// console.log(sum(10, 5));
// console.log(sub(10, 5));

// fazendo como hof

const calculator = (func) => func(10, 5); 

console.log(calculator(sum));

// a função chamada dentro de callback será uma função parâmetro da função calculator. Sendo assim, calculator é uma HOF. Isso pode ser feito tb com a função sub ou com qualquer outra que seja criada. Essa é a vantagem das hofs, elas podem chamar qualquer função como parâmetro ou como retorno.
// a callback não usa os parênteses ao ser chamada dentro da hof

// tentando por minha conta (funcionou perfeitamente)

const doingThings = (act) => act();

const wakeUp = () => 'Acordando!!';
const coffee = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

console.log(doingThings(wakeUp));
console.log(doingThings(coffee));
console.log(doingThings(sleep));