// Instruções para a realização dos exercícios
// Todos os exercícios contêm um código-base. Você deverá copiar esse código e salvá-lo em um arquivo nomeado conforme o número do exercício. Por exemplo, o exercício 1 deve ser salvo no arquivo exercise1.js, e assim por diante.

// 🚀 Se liga nesse foguete!

// Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação, mas fique de olho nesses! 👀


// =============================


// Exercício 1
  // Dado o código abaixo, altere a chamada da função rectangleArea de forma que seja impressa a área dos 3 retângulos (rectangle1, rectangle2 e rectangle3). O código deve retornar em sequência 2, 15 e 54.

  const rectangleArea = (width, height) => width * height;       // cálculo da área de um retângulo

  const rectangle1 = [1, 2];
  const rectangle2 = [3, 5];
  const rectangle3 = [6, 9];
  const rectangles = [rectangle1, rectangle2, rectangle3];
  
  rectangles.forEach((rectangle) => {
    console.log(rectangleArea(...rectangle)); // Altere o parâmetrso recebido por rectangleArea()
  });