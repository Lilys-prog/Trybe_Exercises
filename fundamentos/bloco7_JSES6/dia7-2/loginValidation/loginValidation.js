// loginValidation.js

// A função greetingMessage vai retornar uma frase de boas-vindas com o nome da pessoa usuária.
const greetingMessage = (user) => {
  return `Hello, ${user}! Que bom ter você de volta!`;
};

// A função loginErrorMessage irá, por sua vez, retornar uma mensagem de erro.
const loginErrorMessage = (user) => {
  return `Pessoa usuária '${user}' não encontrada, tente novamente!`;
};

//trazemos aqui esse objeto somente para demonstrar como funciona a função verifyCredentials, mas poderiam ser quaisquer outros dados.
const user = {
  userName: 'Joana',
  password: 123456,
};


// Esta função verifyCredentials faz a validação se a pessoa usuária e a senha recebidas como argumento são estritamente iguais às chaves userName e password contidas no objeto user:
// Neste exemplo os dados estão fixos no código somente para demonstrar como a função deve funcionar.
// Se essa verificação retornar true, a função verifyCredentials vai chamar a função greetingMessage.
// Se retornar false, chamará a função loginErrorMessage, ou seja, as credenciais inseridas não correspondem às existentes no objeto.
const verifyCredentials = ({ userName, password }) => {
  if (password === 123456 && userName === 'Joana') {
    return greetingMessage(userName);
  } else {
    return loginErrorMessage(userName);
  }
};

const { userName, password } = user;

module.exports = { greetingMessage, loginErrorMessage, verifyCredentials }