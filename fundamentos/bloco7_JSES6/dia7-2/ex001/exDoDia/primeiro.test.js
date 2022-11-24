// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item, caso ele exista no array:
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.

const myRemove = require('./primeiro.js');
const remove = require('./primeiro.js');

describe('Testes da função myRemove', () => {
  it('Remover o 3', () => {
    const arr = [1, 2, 3, 4];
    expect([1, 2, 4]).toEqual(myRemove(arr, 3));
  });
  it('Ao remover, a função realmente remove', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).not.toEqual(arr);
  });
  it('Ao remover o 5, o array permanece o mesmo', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 5)).toEqual(arr);
  });
});