// Agora, crie uma função usando dados de estudantes, para mostrar na tela um relatório que diz em qual matéria a pessoa foi melhor. Você usará tanto o map quanto o reduce dentro dele!

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

// resultado esperado: 


// [
//   { name: 'Jorge', materia: 'Português' },
//   { name: 'Mario', materia: 'Biologia' },
//   { name: 'Jorge', materia: 'Português' },
//   { name: 'Maria', materia: 'Química' },
//   { name: 'Natalia', materia: 'Português' },
//   { name: 'Wilson', materia: 'Português' },
// ]

// const names = estudantes.map((element) => element.nome);            (CONSIGO PUXAR OS NOMES)

// const grades = estudantes.map((element) => element.materias);       (CONSIGO PUXAR AS MATÉRIAS)

// NÃO CONSEGUI PENSAR NUM JEITO DE SEPARAR A MAIOR 


// GABARITO:

                          const getBestClass = (acc, materia) => (acc.nota > materia.nota) ? acc : materia; // só 'arrow', nem 'map', nem 'reduce'

                          const reportBest = (students) => students.map((student) => (
                            {
                            name: student.nome,
                            materia: student.materias.reduce(getBestClass).name,
                          }
                          ));

                          console.log(reportBest(estudantes));


// ==========================================================================================                         


// vídeo do Noel (GABARITO EXPLICADO)

// temos que usar o 'map' pq ele vai trazer de volta um array do mesmo tamanho do original com informações direcionadas

// começamos pelo ponto no qual queremos terminar, que é o novo objeto. Desta forma podemos ver os complementos

const report = estudantes.map((estudante) => (
  {
    name: estudante.nome,       // primeiro elemento do objeto
    materia: estudante.materias
    .reduce((acc, materia) => acc.nota > materia.nota ? acc : materia).name
    // segundo elemento do objeto com simplificação ^^^^^      
  }
));
console.log(report);  
   
// parênteses ao redor das chaves pq vou criar um array de objetos
// pode quebrar a linha antes do ponto da HOF q o código considera que contiinua sendo a mesma linha