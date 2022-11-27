// Considerando a função printMessage, crie um teste em Jest para garantir que o objeto passado como parâmetro possui a propriedade personagem.

const {info, printMessage} = require('./printMessage.js');

describe('Testa a função printMessage', () => {
  it("Garante que o parâmetro tem 'personagem'", () => {
    expect(info).toHaveProperty('personagem');
  });
  it('Testando se a resposta está certa', () => {
    expect(printMessage(info)).toMatch('Margarida');
  });
});