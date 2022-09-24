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


// HOFs nos permitem compactar ações e não somente repassar valores
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};
repeat(5, console.log);


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

// A função recebida como argumento pela HOF, também é conhecida por callback. No exemplo, repeat3 é uma HOF que recebe isEven ou isOdd como função callback.


