

// Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.

const myFizzBuzz = require("./fizzbuzz");

// Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado.

const fizz = require('./fizzbuzz');

describe('Testando a função myFizzBuzz', () => {
  it('Divisível por 3 e 5', () => {        
    expect(fizz(15)).toBe('fizzbuzz');
  });
  it('Divisível por 5', () => {
    expect(fizz(25)).toBe('buzz');
  });
  it('Divisível por 3', () => {
    expect(fizz(9)).toBe('fizz')
  });
});


// Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.