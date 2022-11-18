                    // const sum = (value1, value2) => {
                    //   return value1 + value2;
                    // };
                    // console.log(sum(2, 3));
// neste código, desde que só sejam adicionados números, tudo vai funcionar perfeitamente.

//========================================================================

                    // const sum = (value1, value2) => {
                    //   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
                    //     return 'Os valores devem ser numéricos';
                    //   }
                    //   return value1 + value2;
                    // };
                    // console.log(sum(2, '3'));
// este segundo sódigo lança uma mensagem de erro se o usuário colocar um tipo que não seja number

//========================================================================

                    // const sum = (value1, value2) => {
                    //   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
                    //   throw new Error('Os valores devem ser numéricos');
                    //   }
                    //   return value1 + value2;
                    // };

                    // console.log(sum(2, '3'));
// este terceiro usa a mensagem de erro, mas a faz de forma bagunçada, aparecendo todo um erro no console. É aí que entram os métodos try/catch

//========================================================================

const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos'); // através do construtor `new Error` já sabemos que será lançada a mensagem se algo der errado.
  }
};

const sum = (value1, value2) => {
  // o `try` vai executar a função verifyNumber e retornar a soma caso os parâmetros sejam números
  try { 
    verifyIsNumber(value1, value2);
    return value1 + value2;
  // se o bloco `try` apresentar erro, o `catch` vai capturar esse erro e retornar a mensagem já criada através da propriedade `.message` nativa do objeto Error.
  } catch (error) {
    return error.message;
  }
};

console.log(sum(2, '3'));
