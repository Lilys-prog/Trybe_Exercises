// Exercício 2: Considerando a função printMessage, crie um teste em Jest para garantir que o objeto passado como parâmetro possui a propriedade personagem.

// Exercício 3: Complementando o teste da função acima que valida a entrada de parâmetro, você pode utilizar o matcher toMatch() para validar a resposta da função.
// Verifique se a resposta contém a informação Boas vindas,, antes de chamar o nome da personagem;
// Verifique se a resposta contém o nome correto da personagem.

// Exercício 4: Para finalizar o teste da função printMessage, você pode ainda criar um fluxo de exceção dentro da função para criar um erro caso seja enviado um parâmetro que não seja um objeto, ou que não tenha a propriedade personagem como no exemplo abaixo.


const {info, printMessage} = require('./printMessage.js');

describe('Testa a função printMessage', () => {
  it("Garante que o parâmetro tem 'personagem'", () => {
    expect(info).toHaveProperty('personagem');
  });
  it('Testando se a resposta está certa', () => {
    expect(printMessage(info)).toMatch('Margarida');
  });
  it('Mensagem de boas vindas', () => {
    expect(printMessage(info)).toContain('Boas vindas, ')
  });
});