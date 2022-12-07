// Parte I
// Nova pessoa contratada

// Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:

    // crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

    // utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas

const employeeGenerator = (fullname) => {
  const email = fullname.toLowerCase().replace(' ', '_');
  return { fullname, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), 
    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: callback('Luiza Drumond'), 
    // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetros 
    id3: callback('Carla Paiva')
    // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees(employeeGenerator));

//  ==================================================================

//SOLUÇÃO PASSO A PASSO PARA COMPARAR COM A RESPOSTA

// 1º passo: crie a função que recebe o nome e gera o email da pessoa contratada.
    // Ao criar a função, você deve passar o nome completo por parâmetro e retornar um objeto que vai receber o nome completo e o email.


// 2º passo: desenvolva a lógica do email.
    // O email vai ser gerado a partir do nome passado por parâmetro.
    // Ao criar um email, é importante deixá-lo padronizado com letras minúsculas e utilizar o underline(_) para separar o nome da pessoa. Para isso:
    // utilize a função toLowerCase() para deixar as letras minúsculas.
    // separe o nome utilizando o underline (_): >>>>>>>> (replace(' ', '_')) <<<<<<<<<
    // OPÇÃO: O nome vem separado por espaços; você pode utilizar o replace para substituir os espaços por _.
    //  🔎: O replace não é a única maneira de substituir valores em uma string. Você pode utilizar outros métodos, como o split e o join, etc. >>>>>>>> .split(' ').join('_')  <<<<<<<<<<   numa linha só, depois do lower case
    //retorne o email utilizando template literals.


// Terceiro passo: passe a função como parâmetro para cada id dentro de newEmployees.
    // Para finalizar a sua lógica, basta passar a função que você criou como parâmetro de newEmployees.



