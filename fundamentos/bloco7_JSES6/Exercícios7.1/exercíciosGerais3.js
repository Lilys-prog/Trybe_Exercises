// EXERCÍCIO 2 DA PARTE 2

// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.

// exemplo:   longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

// Dica: Nesse exercício será necessário utilizar os conhecimentos sobre array, método split e loop for/of.


const longestWord = (frase) => {
  let vetor;
  let maior;
  vetor = frase.split(' ');
  let base = vetor[0].length;
  for (let i = 1; i < vetor.length; i += 1) {
    if (vetor[i].length > base) {
      base = vetor[i].length;
      maior = vetor[i];
    }    
  }  
  return maior;
}
console.log(longestWord('vejamos do que esse trambolho é capaz'));

