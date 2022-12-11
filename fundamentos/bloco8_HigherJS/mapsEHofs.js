// EXEMPLOS DE MAP JUNTO A OUTRAS HOFs SENDO APLICADAS
// Para os exemplos a seguir será usado um array com os dados de estudantes de um colégio.

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
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------


// Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.

              // const allNameStudents = estudantes.filter((estudante) => (
              //   estudante.turno === 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);

              // console.log(allNameStudents);

// O filter possui a mesma estrutura do forEach, map, entre outros, e é responsável por retornar um array filtrado de acordo com alguma condição. Neste caso, a condição de que o turno seja 'Manhã'.


// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------


// Buscar um estudante pelo nome e retornar a situação dele em cada matéria: (map e find)

const reportStatus = (name, students) => {                                    // função normal
  const studentInfo = students.find((student) => student.nome === name);      // hof
  return studentInfo.materias.map((materia) => (
    `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
  ));
};

console.log(reportStatus('Natalia', estudantes));

// Primeiro, fizemos um find para buscar e retornar os dados do estudante. O objeto foi retornado e salvo na variável studentsInfo, depois o map foi usado para percorrer as matérias do objeto retornado e salvar o que se queria em um array da forma desejada.

