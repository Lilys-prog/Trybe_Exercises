let numero = 9;
for (let i = 1; i < 10; i += 1) {
  console.log('');
  console.log(numero * i);
}



//         =================================
//         =================================
//         =================================
//         =================================
//         =================================



let alunos = ['Cláudia', 'Joana', 'Maria', 'Guilherme', 'Pablo'];
for (let i = 0; i < alunos.length; i += 1) {
  let message = 'Olá, ' + alunos[i] + '!';
  console.log(message);
}




//         =================================
//         =================================
//         =================================
//         =================================
//         =================================



// EXEMPLO

// Suponha que temos uma lista com marcas de carros:

let cars = ['Saab', 'Volvo', 'BMW'];

// formma de apresentar os valores sem usar o for:
console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW

// usando o for:
for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}





//         =================================
//         =================================
//         =================================
//         =================================
//         =================================



// PARA FIXAR
// Utilize o for para imprimir os elementos da lista groceryList com o console.log():

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i += 1) {
  console.log(groceryList[i]);
}

// uma dica
console.log(groceryList.at(-1));
// é o mesmo que fazer groceryList.length - 1