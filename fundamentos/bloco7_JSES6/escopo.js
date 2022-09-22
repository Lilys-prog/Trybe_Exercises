function userInfo() {
  let userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail);
}

userInfo();


// segunda função de teste

if (true) {
  // inicio do escopo do if
  var userAge = '20';
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20 - usando 'let' para declarar a variável, esta linha não é executada, pois o let não 'vaza' para fora do escopo do if

// o var consegue não vazar para fora da função, mas não para fora do corpo dos blocos if e for, por exemplo. Ela acaba vazando pro restante da função, não se restringindo ao seu bloco.


// outro problema do var é que ele pode ser declarado novamente e nenhum erro ocorrerá
var userName = 'Isabella';
var userName = 'Lucas';
console.log(userName); // Resultado: Lucas


// usando o 'let' e o 'const' não há chance de redeclaração acidental, pois dará erro. 'Const' não pode ter seiu valoor alterado, mas 'let' sim
const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition


// se o const for utilizado para criar um objeto, pode-se utilizar métodos para alterar suas propriedades, sem alterar seu valor original. Atriibui-se novo valor à uma determminada chave, por exemplo
const userInfo = {
  name: 'Cláudio',
  id: '5489-2',
  email: 'claudio@email.com',
};

userInfo.name = 'João'; // usando método para atriibuir novo valor à chave João

console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

//
// Esse raciocínio também se aplica a um array. Podemos alterá-lo indiretamente adicionando/removendo um novo item sem sobrescrever o que já foi declarado
// aqui usou-se o método push para adicionar um novo elemento
const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

// aqui tentou-se atribuir um novo valor de array
technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro
//

//hoisting é um 'erro' que acontece quando se usa 'var'. Se as variáveis forem declaradas fora de uma função elas viram variáveis globais e se forem dentro de uma função vão para o topo do escopo local da função, 'vazando' para os blocos de código presentes nela


// a variável só foi declarada depois da atribuição e mesmo assim o js considera ok e executa
age = 20;
var age;
console.log(age); // 20
// isso acontece por causa do hhoisting, que move a declaração da variável para o topo do código

//sempre se deve tentar declarar as variáveis usando o 'const'. Mesmo o let deve ser usado só se ela for ser reatriibuída. E o 'var' pode queiimar no mármore do inferno.