// um operador é um símbolo que representa uma ação ou um processo. Eles vão ser unários ou binários ou ternários, etc, de acordo com a quantidade de OPERANDOS que receberem.

// o operador ternário vai receber 3 operandos e seu formato será

        //          condição ? código caso true : código caso false;

// ele é uma condicional simples, como o if/else


const firstNum = 1;
const secNum = 2;
// let message;

        // if (firstNum > secNum) {
        //   message = 'uhul!!'
        // } else {
        // message = 'nope';
        // }
        // console.log(message);

    
const message = firstNum < secNum ? 'uhull' : 'nope';
console.log(message);
// pode-se declarar e atribuir a variável ao mesmo tempo
// usa-se o let quando a variável é declarada, mas não tem valor inicial. O const SEMPRE deve ter valor inicial
// aqui temos apenas uma constante


// pode-se tb colocar dentro de uma função


const funcao = (num1, num2) => num1 < num2 ? 'uhul' : 'nope';
// neste caso, o ternário é o retorno da função

console.log(funcao(5, 4));
// aqui temos uma função com 2 parâmetros


// se quiser quebrar o ternário em mais de uma linha para que ela não fique muito comprida, pode-se dar enter antes da interrogação e/ou antes dos dois pontos

