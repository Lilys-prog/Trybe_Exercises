// a primeira coisa é criar uma função que 'lance' o erro, identifique-o caso aconteça. No caso abaixo, se um dos valores inseridos não for numérico. Lançado pq vai se usar a palavra 'throw'. Assim como no java, a palavra 'new' cria um novo objeto.

const verificaValores = (a,b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Erro! Os valores devem ser numéricos"');    
  }
}

// 'Error' é um objeto nativo do js, ao chamar 'new Error' é feita uma cópia desse objeto para que se possa atribuir propriedades, neste caso, a mensagem.

// o erro acima 'quebrará' o código e exibirá a mensagem no console, junto com a quebra. Vejammos como não quebrar o código, usando try/catch




const soma = (a, b) => {
  try {
    verificaValores(a,b);
    return a + b;
  }
  catch (deuRuim) {
    return deuRuim.message;
  }
}

console.log(soma(5,'5'));
console.log(soma(2,3));

// o catch 'pega' o erro que foi definido na outra função. Assim temos o aviso de erro de forma limpa e sem quebrar a execução da função.