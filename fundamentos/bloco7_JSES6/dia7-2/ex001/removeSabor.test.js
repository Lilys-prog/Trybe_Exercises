// este aqui é o arquivo de teste. Usando PDD completo iríamos criar os testes primeiro sem que nem mesmo a função existisse. Aqui vai se criar parte como pdd, pois os testes vão ser usados como falha primeiro, para depois se ajeitar de maneira que funcione. Mas ainda não é um PDD completo.
// a constante 'removeBebida' (que é a função a ser testada) é quem exporta o arquivo em que está a função.

 const removeBebida = require('./removeSabor');

 // o describe usado para formar blocos de testes, especialmente quando existe mais de uma função a ser testada. Todos os testes de cadda função estarão armazenados no bloco descritivo correspondente. O 'Test Suites' vai mostrar quantos describes têm e suas descrições e o 'Tests' de cada função estará dentro da área de Suites.
 // pode-se usar 'it' ou 'teste' no começo de cada teste. Eu prefiro 'it'.
 // existem MUITOS matchers, mas aqui está se usando o 'toEqual' que serve comumente para arrays e objetos. Em variáveis simples usa-se muito o 'toBe', mas olhando a documentação vê-se que existem muitos tipos.
 // vamos definir o array 'bebidas' em cada teste, independentemente, pq não estamos fazendo uma eliminação em crescente.
 // nos dois primeiros casos 'água' e 'garapa' vamos utilizar uma metodologia. No de 'groselha' faremos de outra forma. No primeiro e no segundo colocamos o array no expect e tiramos o elemento que não deve estar presente. Depois comparamos com a função e seus parâmetros.


 describe('Remove sabor de bebida', () => {
  it('Remover água', () => {
    const bebidas = ['coca-cola', 'sukita', 'água', 'garapa', 'suco de laranja', 'groselha'];
    expect(['coca-cola', 'sukita', 'garapa', 'suco de laranja', 'groselha']).toEqual(removeBebida(bebidas, 'água'));
  });
  it('Remove garapa', () => {
    const bebidas = ['coca-cola', 'sukita', 'água', 'garapa', 'suco de laranja', 'groselha'];
    expect(['coca-cola', 'sukita', 'água', 'suco de laranja', 'groselha']).toEqual(removeBebida(bebidas, 'garapa'));
  });
  it('Remover groselha, caso exista', () => {
    expect(removeBebida()).toEqual();
  });
 });