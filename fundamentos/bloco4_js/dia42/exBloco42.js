// EXERCÍCIOS 4.2

// 🚀 Lidando com Arrays
// Iremos utilizar o array abaixo para realizar os próximos exercícios.

      //  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1 
// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}



//                    ============================
//                    ============================
//                    ============================
//                    ============================
//                    ============================
//                    ============================




// Exercício 2
// Some todos os valores contidos no array e imprima o resultado;

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0; 
for (let i = 0; i < numbers.length; i += 1) {   
  soma += numbers[i];  
}
console.log(soma);




//                    ============================
//                    ============================
//                    ============================
//                    ============================
//                    ============================
//                    ============================




// Exercício 3
// Calcule e imprima a média aritmética dos valores contidos no array;

// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma1 = 0; 
for (let i = 0; i < numbers.length; i += 1) {   
  soma1 += numbers[i];  
}
console.log(soma1/numbers.length);





//                    ============================
//                    ============================
//                    ============================
//                    ============================
//                    ============================
//                    ============================




// Exercício 4
// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma2 = 0; 
for (let i = 0; i < numbers.length; i += 1) {   
  soma2 += numbers[i];  
}
let media = soma2/numbers.length;
console.log(media);
if (media > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}






//                    ============================
//                    ============================
//                    ============================
//                    ============================
//                    ============================
//                    ============================




// Exercício 5
// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maior) {
    maior = numbers[i];
  }
}
console.log(maior);





//                    ============================
//                    ============================
//                    ============================
//                    ============================
//                    ============================
//                    ============================



// Exercício 6
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let imp = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 === 1) {
    imp += 1;
  }
}
if (imp > 0) {
  console.log(imp);
} else {
  console.log('Nenhum valor ímpar encontrado');
}





//                    ============================
//                    ============================
//                    ============================
//                    ============================
//                    ============================
//                    ============================



// Exercício 7
// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < menor) {
    menor = numbers[i];
  }
}
console.log(menor);





//                    ============================
//                    ============================
//                    ============================
//                    ============================
//                    ============================
//                    ============================


// Exercício 8
// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
for (let i = 1; i < 26; i += 1) {
  console.log(i);
}





//                    ============================
//                    ============================
//                    ============================
//                    ============================
//                    ============================
//                    ============================


// Exercício 9
// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (let i = 1; i < 26; i += 1) {
  console.log(i/2);
}