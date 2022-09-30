const greetingPeople = require('./greeting');

describe('Testa greetingPeople', () => {
  it('Quando a função é chamada, retorna a mensagem Oláááááá,, enfermeira!', () => {
    expect(greetingPeople()).toBe('Oláááááá,, enfermeira!');
  });
});