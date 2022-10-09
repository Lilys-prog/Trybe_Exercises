// permite escrever strings complexas de forma simplificada. Sem usar toda a parafernalha de concatenação.

// modo sem template
// const myName = 'Isabella';
// console.log('Hello' + ' ' + myName + '!');

// modo com template
const myName = 'Isabella';
console.log(`Welcome ${myName}!`);
// perceba que em template literals usa-se o acento grave para delimitar e não as aspas. Também se usa caves para cada variável que será usada e o nome da mesma aparece dentro da chave


// Com o template literals a quebra de linha acontece naturalmente
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals vc precisa usar o \n em todos os lugares que quiser quebrar
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

let pessoa = {
  nome: 'Márcia',
  sobrenome: 'Albuquerque',
  anoNascimento: 1979
}


console.log(`Paciente: ${pessoa.nome} ${pessoa.sobrenome}
Idade: ${2022 - pessoa.anoNascimento} anos`);

// nos templates literals tb pode-se usar o \n pra quebrar, sem espaços entre os pontos de quebra, pra não causar espaçamentos desnecessários. Mas só se for algo muito específico

