// OPERADORES LÓGICOS


// && - AND
const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

// exercício de &&
const currentHour = 11.15;
let message;

if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir';
}
else if (currentHour >= 18 && currentHour < 22) {
  message = 'Rango da noite, vamos jantar :D';
}
else if (currentHour >=14 && currentHour < 18) {
  message = 'Vamos fazer um bolo pro café da tarde?';
}
else if (currentHour >= 11 && currentHour < 14) {
  message = 'Hora do almoço!!!';
}
else if (currentHour >= 4 && currentHour < 11) {
  message = 'Hmmm, cheiro de café recém-passado'
}
else {
  message = 'Vai dormir, pô!'
}
console.log(message);


// || - OR
const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

// exercício de ||
const weekDay = 'sábado';
if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D');
}
else {
  console.log('FINALMENTE, descanso merecido UwU');
};


// ! - NOT

// exemplos

// strings
const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false


//números
console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.


// valores nulos
console.log(!null); // true


// undefined
console.log(!undefined); // true

