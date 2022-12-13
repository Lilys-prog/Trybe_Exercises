// faça uma função que some todos os números pares do array numbers, usando 'reduce' e outra usando 'filter' e 'reduce':

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

                        // // filter e reduce (acertei!):

                        // const evens = numbers.filter((par) => par % 2 === 0;
                        // const sum = evens.reduce((acc, curr) =>  acc + curr;                      
                        // console.log(sum);

// ======================================================================================
// ======================================================================================

// usando só o reduce (usei o gabarito):

const sum = (acc, number) => ((number % 2 === 0) ? acc + number : acc);
const sumNumbers = (array) => array.reduce(sum, 0);
console.log(sumNumbers(numbers));
// 152