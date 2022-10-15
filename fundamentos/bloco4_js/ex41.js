// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 20;
const b = 5;

const soma = a + b;
console.log(soma);

const subt = a - b;
console.log(subt);

const mult = a * b;
console.log(mult);

const div = a / b;
console.log(div);

const pot = a ** b;
console.log(pot);

const rest = a % b;
console.log(rest);



//                         ================================
//                         ================================
//                         ================================
//                         ================================
//                         ================================
//                         ================================




// Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

const num1 = 7;
const num2 = 15;

if (num1 > num2) {
  console.log(num1 + ' é maior que ' + num2);
}
else {
  console.log(num2 + ' é maior que ' + num1);
}



//                         ================================
//                         ================================
//                         ================================
//                         ================================
//                         ================================
//                         ================================



// Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const n1 = 7;
const n2 = 15;
const n3 = 27;

if (n1 > n2 && n1 > n3) {
  console.log(n1 + ' é o maior número dos 3.');
}
else if (n2 > n1 && n2 > n3) {
  console.log(n2 + ' é o maior número dos 3.');
} 
else {
  console.log(n3 + ' é o maior número dos 3');
}




//                         ================================
//                         ================================
//                         ================================
//                         ================================
//                         ================================
//                         ================================



// Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

let A1 = 0;

if (A1 > 0) {
  console.log('Positive');
}
else if (A1 < 0) {
  console.log('Negative');
}
else {
  console.log('Zero');
}




//                         ================================
//                         ================================
//                         ================================
//                         ================================
//                         ================================
//                         ================================



// 🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

const ang1 = 45;
const ang2 = 45;
const ang3 = 90;

if (ang1 <= 0 || ang2 <= 0 || ang3 <= 0) {
  console.log('Erro. Ângulo negativo, valor inválido.');
}
else if (ang1 + ang2 + ang3 !== 180) {
  console.log('Triângulo inválido');
}
else {
  console.log('Triângulo válido.');
}





//                         ================================
//                         ================================
//                         ================================
//                         ================================
//                         ================================
//                         ================================




// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)


let text = 'Rainha';
let peça = text.toLowerCase();
switch (peça) {
  case 'rei':
    console.log('Move-se para qualquer direção, uma casa por vez');
    break;
  case 'rainha':
    console.log('Move-se para qualquer direção, quantas casas quiser');
    break;
  case 'torre':
    console.log('Move-se em linha reta vertical ou horizontal, quantas casas quiser');
    break;
  case 'bispo':
    console.log('Move-se na diagonal, quantas casas quiser');
    break;
  case 'cavalo':
    console.log('Move-se em L e é a única peça que pode passar por cima das outras');
    break;
  case 'peão':
    console.log('Move-se uma casa para a frente');
    break;
  default:
    console.log('Peça inexistente. Não estamos jogando xadrez?');
}






//                         ================================
//                         ================================
//                         ================================
//                         ================================
//                         ================================
//                         ================================




// Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 105;
let conceito;
if (nota >= 90 && nota < 100) {
  conceito = 'A';
} else if (nota >= 80 && nota < 90) {
  conceito = 'B';
} else if (nota >= 70 && nota < 80) {
  conceito = 'C';
} else if (nota >= 60 && nota < 70) {
  conceito = 'D'
} else if (nota >= 50 && nota < 60) {
  conceito = 'E';
} else if (nota < 50) {
  conceito = 'F';
} else if (nota < 0 || nota > 100) {
  console.log('Nota inválida');
  process.exit();
}
console.log(conceito);






//                         ================================
//                         ================================
//                         ================================
//                         ================================
//                         ================================
//                         ================================




// Há um par entre nós
// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

const a2 = 10;
const b2 = 5;
const c2 = 3;


