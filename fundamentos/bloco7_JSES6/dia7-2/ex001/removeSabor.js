const removeBebida = (array,  remover) => {
  array.splice(array.indexOf(`${remover}`), 1);
  return array;
};

module.exports = removeBebida;

// a arrow function recebe 2 parâmetros. Um array e um elemento que se quer retirar do array ('remover').
// Usa-se o '.splice' para quebrar o array em cada um dos seus elementos e então o 'indexOf' para encontrar o elemento que se quer eliminar do array. O '1' representa que só está se removendo um elemento. O splice tb retira o elemento que ele encontrou com o indexOf.
// o 'module.exports' vai  permitir que a função seja carregada no arquivo de testes.