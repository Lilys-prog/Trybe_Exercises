// é uma função comum que faz alguma coisa

const { Button } = require("bootstrap");

// função normal
      // function ourFunction () {
      //   return 'Faz alguma coisa';
      // }


// em arrow
      // () => {
      //   return 'Faz alguma coisa';
      // }
// embora esta função esteja feita, para chamá-la, devemos colocar em uma variável


// ALGUMAS DEFINIÇÕES EM ARROW
//  - é uma função anônima
//  - não precisa da palavra-chave function
//  - possui uma 'seta' entre os parâmetros e o corpo da função
//  - pode ter um 'return' implícito
//  - quando está em uma única linha não preciiisa de chaves {}
//  - quando o parâmetro é único, pode-se usar ou não parênteses ()
//  - se não houverem parâmetros pode-se usar () ou _
//  - para chamada e uso da função, já que ela é anônima, pode-se atribuir a uma variável
// a função é chamada através do nome da constante e mais os parâmetros:
      // ourFunction();

const ourFunction = () => {
  return 'Faz alguma coisa';
}
console.log(ourFunction());  // chamada

// ===================================================

// TRABALHANDO COM O DOM, EXEMPLO:

// função anônima:
button.addEventListener('click', function () {
  // código
});

// com arrowfunction:
botao.addEventListener('click', () => {
  // código
});


// ===================================================

// SIMPLIFICAÇÕES DA ARROW FUNCTION


// arrow cujo código é somente uma linha de retorno
const f1 = (x, y) => {
  return x + y;
}

const f1 = (x, y) => x + y;
// oculta-se as chaves e a palavra 'return'

                              // ===========================

// arrow que possui somente um parâmetro

const f2 = x => x * x;     // sem parênteses no parâmetro x
// pode-se ocultar o parênteses de parâmetro


                              // ============================


// arrow que não possui parâmetros

const f3 = _ => 'Olá, mundo!';
// o espaço onde o parâmetro ficaria é preenchido pelo underline
console.log(f3());
// mas o console.log ainda usa o parênteses



// uma das vantagens de colocar uma função dentro de uma constante é que a constante não permite que aconteça hoisting.