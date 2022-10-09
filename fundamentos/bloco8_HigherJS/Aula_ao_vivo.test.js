// module.exports = {greeting, defaultGreeting, badMoodGreeting, loveGreeting, person} = require('./greeting');

const greetingPeople = require('./Aula_ao_vivo');

// o comando 'describe', além de dar uma breve descrição da bateria de testes que será executada, os agrupa, forma um bloco de testes por função. É uma função que recebe 2 parâmetros, o primeiro sendo uma string com a descrição e o segundo será uma função. Sendo assim, 'describe' também é uma hof padrão do js.
// o 'test' ou 'it' também é uma hof padrão

describe('Testa a função greetingPeople', () => {
  it('Veriifica se ao ser chamada a função retorna a mensagem `Oláááááá,, enfermeira!`', () => {
    expect(greetingPeople()).toBe('Oláááááá,, enfermeira!');
  });
});