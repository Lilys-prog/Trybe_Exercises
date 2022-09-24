const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 === 50
assert.strictEqual(50, 70); // AssertionError: 50 !== 70


// o assert é impraticável no munddo corporativo, surgiu então o jest, que é uma suíte de testes mais robusta, legível e de fácil manutenção. Ele é um framework de testes.

// ====================================================
// ====================================================

///Escrever testes em Jest é muito simples. Para começar, é muito importante utilizar a função de nome test. A função com nome it é um alias para test, ou seja, ambas se referem à mesma função e você pode usar qualquer uma delas. Essas funções, por serem globais, ficam automaticamente disponíveis nos seus arquivos uma vez que o Jest é instalado.

// A função test (ou it) espera três argumentos: 
// O primeiro argumento é o nome do teste. Esse nome identifica o teste e é também o texto que aparecerá quando os testes forem executados. 
// O segundo argumento é uma função contendo suas expectations. Em outras palavras, é dentro dessa função que você fará os testes propriamente ditos. 
// O terceiro argumento (OPCIONAL) é um timeout, indicando quanto tempo o Jest deve esperar que o teste execute antes de abortá-lo.

// sum.js
const sum = (a, b) => a + b;

test('soma dois valores', () => {
  expect(sum(2, 3)).toEqual(5);
});