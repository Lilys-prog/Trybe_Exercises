const removeBebida = require('./removeSabor');

describe('Remove sabor de bebida', () => {
  it('Remover água', () => {
    const bebidas = ['coca-cola', 'sukita', 'água', 'garapa', 'suco de laranja', 'groselha'];
    expect(['coca-cola', 'sukita','garapa', 'suco de laranja', 'groselha']).toEqual(removeBebida(bebidas, 'água'));
  })
  it('Remover garapa', () => {
    const bebidas = ['coca-cola', 'sukita', 'água', 'garapa', 'suco de laranja', 'groselha'];
    expect(['coca-cola', 'sukita', 'água', 'suco de laranja', 'groselha']).toEqual(removeBebida(bebidas, 'garapa'));
  })
  it('Remover groselha, caso exista', () => {
    const bebidas = ['coca-cola', 'sukita', 'água', 'garapa', 'suco de laranja', 'groselha'];
    expect(removeBebida(bebidas, 'groselha')).not.toContain('groselha');
  })
})