// a função abaixo serve para remover uma bebida de um array de bebidas
// os parâmetros da função são o array e a bebida que se quer remover
const removeBebida = (array, remover) => {
  array.splice(array.indexOf(`${remover}`), 1);
  return array;
}

// o splice va dividir o array em elementos, o indexOf vai procurar o elemento dentro do array e o 1 representa que é somente 1 elemento a ser removido. Depois disso o array não terá mais aquela bebiida.

// o module.exports serve para podermos usar a função em outro arquivo, nesse caso, o arqquivo de testes.

module.exports = removeBebida;