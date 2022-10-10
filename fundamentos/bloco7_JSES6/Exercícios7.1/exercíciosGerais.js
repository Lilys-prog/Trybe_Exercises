// EXERCÍCIO 01
    // Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.

    // Modifique a estrutura da função para que ela seja uma arrow function;
    // Modifique as variáveis para que respeitem o escopo onde estão declaradas;
    // Modifique as concatenações para template literals.

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope}. Ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = `Não devo ser utilizada fora do meu escopo (else).`;
    console.log(elseScope);
  }
  //console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(false);


//       ======================================================
//       ======================================================
//       ======================================================
//       ======================================================
//       ======================================================


// EXERCÍCIO 02
    // Crie uma função que retorne um array em ordem crescente.

const numC = (a, b) => a - b;
// esta função faz com que o array seja ordenado numericamente e de forma crescente

const cresc = (vetor) => {

  vetor.sort(numC);
// aplicando a função numC garante que o método sort aja de forma numérica e não de forma ASCII (que leva a uma espécie de ordem 'alfabética')

  return vetor;
}
console.log(cresc([13, 2, 25, 9, 0]));

// toda essa parafernalha é necessária porque o método sort() não é numérico, mas léxico



//       ======================================================
//       ======================================================
//       ======================================================
//       ======================================================
//       ======================================================


// EXERCÍCIO 3
    // Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
    // Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase “Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!”.
    // Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.

    const oddsAndEvens = [13, 3, 4, 10, 7, 2];
    const ordenar = (a, b) => a - b;
    const sortOddsAndEvens = (oddsAndEvens) => {
      oddsAndEvens.sort(ordenar);
      return oddsAndEvens;
    }  
    console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`);

