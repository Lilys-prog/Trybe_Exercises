const gamers = [
  {
    name: 'Eduardo',
    points: [20, 22, 100, 10, 0]
  },
  {
    name: 'Ana',
    points: [0, 20, 10, 100, 100]
  },
  {
    name: 'Bob',
    points: [0, 100, 10, 10, 5, 20]
  },
  {
    name: 'Carlo',
    points: [3, 20, 10, 10, 10]
  }
];

// o objetivo é ordenar o array de objetos 'gamers' 
// a e b são objetos e têm suas propriedades

// ordenando pelos nomes
gamers.sort((a, b) =>{
  return a.name > b.name ? 1 : -1;
});
console.log(gamers);
// segue a mesma ideia de números que se for negativo vem antes e se for positivo vem depois


// ------------


// ordenando pelos pontos. Vamos somar os arrays de pontos e ordenar por que tem mais pontos no total

gamers.sort((a, b) => {
  let pointsA = 0;
  let pointsB = 0;
  a.points.forEach((element) => pointsA += element);
  b.points.forEach((element) => pointsB += element);
  return pointsA - pointsB;
});
console.log(gamers);