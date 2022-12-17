// juntando arrays

const carros = ['Gol', 'HB20', 'Focus'];
const motos = ['Bis', 'R1'];

const veiculos = [...carros, ...motos]
console.log(veiculos);
// [ 'Gol', 'HB20', 'Focus', 'Bis', 'R1' ]

// ========================

// pq eles usam o termo 'espalhar'?

// pq o que o spread está fazendo com os arrays é o seguinte:
// [array[0], array[1], array[2], array2[0], array2[1]]
// ou seja, ele 'abre' os arrays, 'espalha' eles
// será espalhado na ordem em que forem colocados
// podem ser adicionados outros elementos tb, separados por vírgulas [...carros, 'Uno', ...motos]


//============================================================================================

// Agora com objetos

const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: true,
  trabalho: true,
}

const pessoa = {
  nome: 'Nádia',
  idade: '28',
  cidade: 'BH',
}

const pessoaTryber = {
  ...pessoa,
  ...conhecimentosTrybe,
  esporte: 'Corrida',
}

console.log(pessoaTryber);

// não só dá pra juntar, mas tb pra adicionar outras coisas além daquilo que se está juntando