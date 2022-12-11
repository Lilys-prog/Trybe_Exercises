// A nova tarefa do seu time de desenvolvimento é organizar o sistema de pessoas colaboradoras de uma rede de mercados. Para isso:
  // <01> Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.
  // <02> Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

  const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ]; 

  people.sort((personA, personB) => personA.age - personB.age);  // CÓDIGO ADICIONADO PARA SOLUÇÃO DA 1ª
 // people.sort((personA, personB) => personB.age - personA.age);  // CÓDIGO ADICIONADO PARA SOLUÇÃO DA 2ª

  console.log(people);

              //----------------------
              // RESOLUÇÃO NO GABARITO
              //----------------------

// Se é para colocar em ordem crescente, utilizamos a subtração do primeiro parâmetro pelo segundo. 
// Para ordem decrescente, subtraímos do segundo parâmetro o primeiro.

  