// Exercício 1
// Você ficou responsável por criar os testes de uma aplicação de calculadora. Para isso, copie a função já implementada abaixo e desenvolva os testes: Separe a função e o teste em arquivos diferentes para evitar qualquer tipo de problema.

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  // else embutido
  return a + b;
}

module.exports = sum;