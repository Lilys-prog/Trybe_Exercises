/*
  EXEMPLO 1:

  Crie uma função que some todos os números contidos no array.
*/


                            //-------------------------
                            //-------------------------


// RESOLUÇÃO COM 'FOR'

// const numbers = [2, 3, 4, 6, 8, 12, 24];

// const sum = (array) => {
//   let accumulatorFor = 0;

//   for (let number of array) {
//     accumulatorFor += number;
//   }
//   return accumulatorFor
// };

                            //-------------------------
                            //-------------------------


// RESOLUÇÃO COM 'REDUCE'

const numbers = [2, 3, 4, 6, 8, 12, 24];

const sum = (array) => {
  return array.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};


module.exports = { sum };