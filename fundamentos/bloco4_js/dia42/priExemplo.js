        // let pizza1 = '4 queijos';
        // let pizza2 = 'Marguerita';
        // let pizza3 = 'Frango';
        // let pizza4 = 'Calabresa';
        // let pizza5 = 'Romeu e Julieta';

        // console.log((pizza1), (pizza2), (pizza3), (pizza4), (pizza5));

// a declaração de diversas variáveis isoladamente (variáveis simples) pode tornar o código maior e pouco eficiente. Se esses valores se relaciionam de alguma forma, talvez possam ser colocados em uma variável composta, uma lista. 

// o array é um tipo de variável composta, uma lista

let pizzas = ['4 queijos', 'Marguerita', 'Frango', 'Calabresa', 'Romeu e Julieta'];
console.log(pizzas);

// cada elemento que compõe o array recebe um índice ou chave, sendo que a contagem inicia em 0. O array pizzas possui os índices 0,1,2,3,4 e é commposto por 5 elementos.


// ADICIONANDO ELEMENTOS AO ARRAY

// pode-se selecionar a posição que se quer ocupar:

pizzas[5] = 'Bacon';
console.log(pizzas);

// o bacon passa a ocupar o próxiimo índice do array. Se fosse usado um índice que já possui valor, esse valor seria substituíido pelo novo

// outra forma de colocar um novo valor no array, necessariiamente na últiima posiição é através do método 'push'

pizzas.push('Portuguesa');
console.log(pizzas);

// a pizza 'Portuguesa' passa a fazer parte do array, ocupando a última posição, quer se saiba ou não qual é o íindice correspondente


// COMPRIMENTO DO ARRAY
// outro método importante na manipulação de arrays é o 'length', que informa quantos elementos compõem o array. Note-se que se 'length' diz quantos elementos o array possui, 'length - 1' vai dizer qual o último índice da lista.


// ORDEM ALFABÉTICA
// o método 'sort()' permite colocar um array de strings em ordem alfabética. Usa-se 
                        //Array.sort();
// mas é importante manter em mente que o 'sort()' coloca os valores em ordem léxica, ou seja, em um array numérico ele não vai simplesmente colocar os números na ordem crescente, ele vai arrumá-los de acordo com a posição na tabela ASCII. Para fazer os números em ordem crescente é preciso adicionar outros métodos, que serão lembrados adiante.
// usando-se colchetes é possível mostrar somente um determinado elemento do array, bastando colocar o valor do índice dentro dos mesmos
                        //array[2];
// vai mostrar o elemento de índice [2] do array

// ============================================

// uma coisa muito interessante nos arrays é seu uso em conjunto com a estrutura de repetição 'for'

for (let i = 0; i < pizzas.length; i += 1) {
  console.log(pizzas[i]);
}
//dessa forma os elementos do array são todos mostrados, mas independentemente, sem os colchetes ao redor
// como se está usando o 'length' como limitador, mesmo que se acrescentem novos elementos, eles também serão exibidos pelo laço de repetição, ao ser chamado novamente


//               =========================================

//               =========================================

//               =========================================

//               =========================================

let tasksList1 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
console.log(tasksList1.length);



// como visto antes, pode-se usar o índice diretamente para acessar um elemento ou se valer do método 'length'
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);


// o método 'push()' adiciona elementos ao final do array. Se se quiser adicionar um elemento novo à primeira posição pode-se usar o método 'unshift()'

// para remover o último elemento do array o método é o 'pop()'. Para remover o primeiro elemento usa-se o 'shift()'

//Outra importante ferramenta é o indexOf(), usado para procurar o índice de um item no Array. Veja o exemplo:
let tasksList3 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList3.indexOf('Reunião');
console.log(indexOfTask);

