// permite escrever strings complexas de forma simplificada. Sem usar toda a parafernalha de concatenação.

// modo sem template
// const myName = 'Isabella';
// console.log('Hello' + ' ' + myName + '!');

// modo com template
const myName = 'Isabella';
console.log(`Welcome ${myName}!`);




// Com o template literals a quebra de linha acontece naturalmente
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals vc precisa usar o \n em todos os lugares que quiser quebrar
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');


