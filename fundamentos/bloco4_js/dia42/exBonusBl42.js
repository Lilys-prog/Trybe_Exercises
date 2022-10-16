// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (array[index] < array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }
// Pelo que eu pude ver, o segredo é que o j deve ir até o ponto em que ele é menor do que i, ou seja, j < i. Desta forma se garante que a análise não passe do total de elementos e dê undefined. Beautiful.
// Ah! E o i começa em 1 e o j começa em 0.


//               ============================
//               ============================
//               ============================
//               ============================
//               ============================


// Exercício Bônus 1
// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let extra;
for (let i = 1; i < numbers.length; i += 1) {
  for (let j = 0; j < i; j += 1) {
    if (numbers[i] < numbers[j]) {
      extra = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = extra;
    }
  }
}
console.log(numbers);


//               ============================
//               ============================
//               ============================
//               ============================
//               ============================


// Exercício bônus 2
// Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let extra1;
for (let i = 1; i < numbers1.length; i += 1) {
  for (let j = 0; j < i; j += 1) {
    if (numbers1[i] > numbers1[j]) {
      extra1 = numbers1[j];
      numbers1[j] = numbers1[i];
      numbers1[i] = extra1;
    }
  }
}
console.log(numbers1);



//               ============================
//               ============================
//               ============================
//               ============================
//               ============================


// Exercício bônus 3
// Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.

let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < number.length; i += 1) { 
  for (let j = 1; j < i; j += 1) {
      if (j < i - 1) {
        number[i] *= number[j];         
      } else if ( i === number.length - 1) {
        number[i] *= 2;
      }
      console.log(number[i]); 
    }
  } 
// não está funcionando ainda
