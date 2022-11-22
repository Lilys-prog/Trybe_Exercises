// a linha 'require' importa a função ou funções que serão testadas através do nome do arquivo no qual elas estão
const removeBebida = require('./removeBebida');

// o comando describe vai separar os testes de função em blocos organizados, especialmente quando houver mais de uma função a ser testada. Contém uma breve descrição do que ses supõe que a função faça.
// Neste caso, em particular, está-se usando 3 testes para checar se a função está funcionando

// pode-se usar a palavra 'it' ou a palavra 'test' na frente de cada teste
// o toEqual é usado pois se está tratando de arrays. Com variáveis simples usamos, em geral, o toBe.

describe('Remove sabor de bebida', () => {
  it('Remover água', () => {
    const bebidas = ['coca-cola', 'sukita', 'água', 'garapa', 'suco de laranja', 'groselha']; // este é o array que contém as bebidas. Ele poderia ser passado como parâmetro para a função 'removeBebida', mas vamos fazer de um jeito diferente. Colocar no expect o array sem o elemento água r no 'toEqual' a função com seus parâmetros.
    expect(['coca-cola', 'sukita', 'garapa', 'suco de laranja', 'groselha']).toEqual(removeBebida(bebidas, 'agua'));
  });
  it('Remover garapa', () => {
    expect(removeBebida()).toEqual();
  });
  it('Remover groselha, caso exista', () => {
    expect(removeBebida()).toEqual();
  });
});