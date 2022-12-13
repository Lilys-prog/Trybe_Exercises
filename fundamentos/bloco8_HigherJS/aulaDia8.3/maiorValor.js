const numbers = [50, 85, -30, 3, 15];

// tente buscar o maior valor do array 'numbers' usando somente a função 'reduce' (tentei pensar um pouco, mas não rolou, vejamos o gabarito)

// SOLUÇÃO

// 1º passo: monte a estrutura do reduce ('bigger' é o acumulador e 'number' é o elemento do array que estiver sendo iterado agora).
// 2º passo: comparar os valores.
// 3º passo: retorne o maior valor

const biggestValue = numbers.reduce((bigger, number) => {
  return bigger > number ? bigger : number;
});
console.log(biggestValue);
// 85

// ======================================================

// Deixando emm apenas uma linha:
// numbers.reduce((bigger, number) => bigger > number ? bigger : number);


// Separando em funções:
// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
// const bigger = numbers.reduce(getBigger);
// console.log(bigger); // 85
// aqui, bigger está recebendo somente a callback, sem valor inicial

