// Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.

const {encode, decode} = require('./mapa');

describe('Testando a função encode', () => {
  it('Encode é função', () => {
    expect(typeof encode).toBe('function');
  });
  it('Vogais viram números', () => {
    expect(encode('a', 'e', 'i', 'o', 'u')).toBe('1', '2', '3', '4', '5');
  });
  it('Outras letras não viram números', () => {
    expect(encode('b', 'c', 'd')).toBe('b', 'c', 'd');
  });
  it('Strings do mesmo tamanho', () => {      
    expect(encode('AEIOU').length).toEqual(5);
  })
});

describe('Testando a função decode', () => {
  it('Decode é uma função', () => {
    expect(typeof decode).toBe('function');
  });
  it('Números viram vogais', () => {
    expect(decode('1', '2', '3', '4', '5')).toBe('a', 'e', 'i', 'o', 'u');
  });
  it('Outros números não viram letras', () => {
    expect(decode('6', '7', '8')).toBe('6', '7', '8');
  });
  it('String do mesmo tamanho', () => {
    expect(decode('54321').length).toEqual(5);
  });
});