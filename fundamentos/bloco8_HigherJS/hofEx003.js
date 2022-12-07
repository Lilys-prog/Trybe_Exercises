// Crie uma HOF que receberá três parâmetros:

  // O primeiro será um array de respostas corretas (soluções);

  // O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

  // O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

// Uma resposta correta adiciona 1 ponto à pontuação final;

// A ausência de uma resposta não altera a pontuação (quando for “N.A”);

// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corretor = (arr1, arr2) => {
  let certas = 0;
  let erradas = 0;
  let vazias = 0;
  let soma = 0;
  for (let i = 0; i < arr1.length; i += 1) {    
    if (arr1[i] === arr2[i]) {
      certas += 1;
    }
    if (arr1[i] !== arr2[i] && arr2[i] !== 'N.A') {
      erradas -= 0.5;
    }
    
    soma = certas + erradas + vazias;
  }
  return soma;
};

const pontFinal = (arr1, arr2, corretor) => corretor(RIGHT_ANSWERS, STUDENT_ANSWERS);

console.log(pontFinal(RIGHT_ANSWERS, STUDENT_ANSWERS, corretor));

// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================

// GABARITO - SOLUÇÃO DA TRYBE

// 1º passo: Vamos criar nossa callback. Ela deve verificar se a resposta do aluno está certa, errada ou se é inexistente, e assim atribuir a devida pontuação.

// 2º passo: Iniciaremos nossa HOF, que receberá os mesmos parâmetros da callback mais a callback em si. Para contagem dos pontos, teremos um contador que será alterado por um loop for que irá percorrer o array de respostas corretas. Vamos começar com essa estrutura.

// 3º passo: A cada iteração utilizaremos nossa callback. Como parâmetros, utilizamos o index do loop para compararmos as respostas corretas com as do estudante.

//const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
//const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

