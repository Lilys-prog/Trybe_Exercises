// Suponha que você esteja trabalhando em uma escola e precise fazer algumas atualizações no sistema. 

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// primeira tarefa
const adicionarTurno = (objeto, chave, valor) => {
  objeto[chave] = valor
}
adicionarTurno(lesson2, 'turno', 'noite');
console.log(lesson2);

// segunda tarefa
const mostrarChaves = (objeto) => {
  console.log(`As chaves são ${Object.keys(objeto)}`);
}
mostrarChaves(lesson1);

// terceira tarefa
const tamObjeto = (objeto) => {  
    return Object.keys(objeto).length; // função para mostrar quantas chaves têm, sem loop  
}
console.log(tamObjeto(lesson1));

// quarta tarefa
const valores = (objeto) => {
  return Object.values(objeto);
}
console.log(valores(lesson1));



//======================================================================================

// última tarefa (essa eu olhei o gabarito). Solução:
// Crie uma função que retorne o número total de estudantes em todas as aulas.
const getNumberOfStudents = (obj) => {
  // Crie uma variável para armazenar o total de estudantes.
  let total = 0;
  // recupere as chaves do objeto passado por parâmetro
  const keys = Object.keys(obj);   // um array de chaves
  // crie uma estrutura de repetição para iterar sobre o array de chaves
  
  // A cada repetição do for/in, incremente a variável total.

  // Acesse o objeto passado por parâmetro através da sintaxe obj[keys[index]];
  // Após acessar o objeto, acesse a chave numeroEstudantes;
  // Utilize esse valor para incrementar a variável total.
  for (index in keys) {  // vai passar por todas as chaves
    total += obj[keys[index]].numeroEstudantes;
  }
  return total;
}
console.log(getNumberOfStudents(allLessons));



//======================================================================================

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

                          //console.log(allLessons);
                          /*
                          {
                            lesson1:
                            { materia: 'Matemática',
                              numeroEstudantes: 20,
                              professor: 'Maria Clara',
                              turno: 'manhã' },
                            lesson2:
                            { materia: 'História',
                              numeroEstudantes: 20,
                              professor: 'Carlos',
                              turno: 'noite' },
                            lesson3:
                            { materia: 'Matemática',
                              numeroEstudantes: 10,
                              professor: 'Maria Clara',
                              turno: 'noite' }
                          };
                          */