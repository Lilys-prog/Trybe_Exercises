// SORTEADOR DE LOTERIA
    // Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

// CONSEGUIIIIIIIII!!!!!!

const gerador = () => Math.round(Math.random() * (5-1) + 1);
  
const resulSorteio = (aposta, gerador) => gerador() === aposta?'Parabéns, você ganhou!':'Tente novamente';
  
console.log(resulSorteio(3, gerador));


// RESPOSTA DA TRYBE (basicamente a mesma <3)

// 1º passo: Vamos criar uma callback que verifica se os números são os mesmos.

const numberChecker = (myNumber, number) => myNumber === number;


// 2º passo: Vamos começar a trabalhar em nossa HOF, iniciando pelo gerador do número aleatório.
// 3º passo: Já temos o parâmetro number dentro do escopo da HOF, então vamos chamar nossa callback com esse valor. Precisamos só dizer à HOF que ela receberá por parâmetro nossa callback e o número escolhido. (o return)

const lotteryResult = () => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number)? 'Lucky day, you won!': 'Try again';
}




