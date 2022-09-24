// A função expect é utilizada para dar acesso a um conjunto de métodos chamados matchers. Esses métodos são estruturas de comparação utilizadas em diversas bibliotecas de testes, inclusive no Jest.

//======================================================

//ALGUNS MATCHERS

// toBe
// // toBe é o matcher mais simples. Esse matcher testa igualdade estrita entre o valor passado para expect e seu argumento. Isso significa, por exemplo, que um teste com o expectation abaixo falharia porque a string “5” não é igual ao número 5.
// expect(5).toBe("5")
//false


// toEqual
// Para testar a igualdade de objetos e arrays, é preciso usar o matcher toEqual, que acessa cada elemento do objeto ou array, fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para a necessidade dos testes.
// test('Igualdade de array e object', () => {
//   const arr = [1, 2 ,3];
//   const obj = { a: 1, b: 2, c: 3};

//   expect(arr).toBe([1, 2, 3]); // fails
//   expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
//   expect(arr).toEqual([1, 2, 3]); // OK
//   expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
// });

// Strings
// Para comparar string com expressões regulares, utilize o matcher toMatch.

// Arrays
// Você pode verificar se um array contém um item em particular utilizando toContain. Para verificar que um item possui uma estrutura mais complexa, utilize toContainEqual. O toHaveLength permite facilmente verificar o tamanho de um array ou de uma string.

// Objetos
// É bastante comum testar se um objeto possui uma propriedade específica. O matcher toHaveProperty é ideal para esses casos.


//============================================
// PROCURAR DOCUMENTAÇÃO:

// Valores booleanos
// Os valores null, undefined e false são do tipo falsy. Isso significa que são tratados como false sempre que se espera um valor booleano, como em condicionais. Às vezes, porém, é preciso distinguir entre eles.

// Números
// Há também matchers para as principais formas de comparar números.

// ==============================================
// ==============================================

// const multiplyByTwo = (number) => {
//   if (!number) {
//     throw new Error('number é indefinido')
//   }
//   return number * 2;
// };
// multiplyByTwo(4);

// test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
//   expect(multiplyByTwo(4)).toBe(8);
// });
// test('testa se é lançado um erro quando number é indefinido', () => {
//   expect(() => { multiplyByTwo() }).toThrow();
// });
// test('testa se a mensagem de erro é "number é indefinido"', () => {
//   expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
// });

// console.log(multiplyByTwo(5));


const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});