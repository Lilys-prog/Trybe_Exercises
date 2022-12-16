// O desafio prático
// Imagine que você tenha passado para a etapa seguinte de uma vaga de trabalho: o desafio prático! E agora precise mostrar todas as suas habilidades em reduce, resolvendo diversas questões.

// Não se preocupe se ainda não acertar os exercícios de primeira. É normal pesquisar bastante sobre os possíveis caminhos para achar a solução, portanto, não deixe de pesquisar! Tenha em mente que quanto mais você praticar durante o curso, mais preparo você terá para realizar um desafio prático de verdade.

// Todos os exercícios devem ser realizados utilizando reduce e, se necessário, outra HOF. A informação será citada no enunciado.

// Para realizar os exercícios de 1 a 3, utilize o array abaixo:

// Fonte: <https://restcountries.com/v2/all>

const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 652230
  },
  {
    name: 'Åland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580
  },
  {
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748
  },
  {
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741
  },
  {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  },
  {
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468
  },
  {
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700
  },
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91
  }
];



//======================================================================================================================
//----------------------------------------------------------------------------------------------------------------------
//======================================================================================================================
//----------------------------------------------------------------------------------------------------------------------
//======================================================================================================================


// QUESTÃO 1
// Calcule a quantidade total da população de todos os países.
    // De olho na dica 👀: o valor inicial deve começar com 0, portanto o acumulador é um número.

// const expectedResult = 120797034;   RESULTADO ATINGIDO

const getPopulation = (array) => {
  return array
    .reduce((people, country) => {
      return people + country.population
    }, 0);

}
console.log(getPopulation(countries));




//======================================================================================================================
//----------------------------------------------------------------------------------------------------------------------
//======================================================================================================================
//----------------------------------------------------------------------------------------------------------------------
//======================================================================================================================




// QUESTÃO 2
// Calcule a área total de todos os países.

// const expectedResult = 4311757;   RESULTADO ATINGIDO


const getTotalArea = (array) => {
  return array
    .reduce((accArea, country) => {
      return accArea + country.area
    }, 0);
}
console.log(getTotalArea(countries))




//======================================================================================================================
//----------------------------------------------------------------------------------------------------------------------
//======================================================================================================================
//----------------------------------------------------------------------------------------------------------------------
//======================================================================================================================



// QUESTÃO 3
//3 - Encontre o país com o maior nome.

    // De olho na dica 👀: o reduce consegue comparar o valor do primeiro com o segundo parâmetro. Compare o tamanho da string name do primeiro parâmetro com a do segundo parâmetro e retorne aquele que for maior.

    // const expectedResult = {
    //   name: 'American Samoa',
    //   region: 'Oceania',
    //   currencies: [{ code: 'USD', name: 'United States Dollar' }],
    //   capital: 'Pago Pago',
    //   population: 55197,
    //   area: 199
    // }
    
  // GABARITO
  // 1º passo: crie a estrutura do reduce.
      // Como precisamos retornar um elemento do array, não vamos configurar um valor inicial para o acc. Nesse caso, por padrão, o valor inicial do acc será igual ao primeiro elemento do array, e o valor inicial do curr será igual ao segundo elemento do array.

    const longestName = () => countries
    .reduce((country1, country2) => country1.name.length > country2.name.length ? country1 : country2);  
console.log(longestName());

// meu erro estava seendo colocar um array geral na função, eles colocaram diretamente o 'countries'. Depois preciso entender pq o gerall não funcionava, pra saber quando usar um ou outro.





//======================================================================================================================
//----------------------------------------------------------------------------------------------------------------------
//======================================================================================================================
//----------------------------------------------------------------------------------------------------------------------
//======================================================================================================================




// QUESTÃO 4
// 🚀 4 - Retorne a quantidade de vezes que a letra 'a' maiúscula ou minúscula aparece no array de nomes.
    // De olho na dica 👀: faça com que o array de nomes seja um array de letras.


// GABARITO
// 1º passo: crie um array com todas as letras do array names.
    // Vamos usar o método join para criar uma string com todos os nomes do array. Em seguida, transformamos todas as letras em minúsculas com o toLowerCase, já que não temos que nos preocupar com case sensitivity.
    // Enfim, usamos o split, passando como parâmetro uma string vazia, para que cada letra se torne um elemento do array de letras.

// 2º passo: crie a estrutura do reduce.
    // Vamos usar o reduce sobre o array criado no passo anterior. Como precisamos retornar um valor numérico, iniciamos o acc como 0.

// 3º passo: adicione a lógica para verificar se a letra é igual à letra a.
    // Caso o curr seja igual a a, o acc incrementa em 1; caso contrário, o valor de acc continua igual.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

const lettersAarray = names.join('').toLowerCase().split('');  //cria um array de letras, o >>> join('').split('') <<<

const countA = () => {
  return lettersAarray.reduce((sum, letter) => {
    return letter === 'a' ? sum += 1 : sum;
  }, 0);                     // usar valor inicial pq vai ser uma soma
}

console.log(countA());





//======================================================================================================================
//----------------------------------------------------------------------------------------------------------------------
//======================================================================================================================
//----------------------------------------------------------------------------------------------------------------------
//======================================================================================================================



// QUESTÃO 5
// 🚀 5 - Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes


// GABARITO PQ EU NEM SEI PRA ONDE VAI NESSA (não estavam aparecendo os arrays tb)

// 1º passo: mapeie o index e devolva a resposta no formato de objeto.
    // Para isso, utilize o map, que será responsável por mapear o index e devolver a resposta no formato correto.

// 2º passo: crie um reduce iniciando o acc como 0.
    // Sobre o array que acessamos com o index, criaremos um reduce com valor inicial de acc igual a zero, e ele deve somar todas as notas.

// 3º passo: divida o valor desse reduce pelo tamanho total do array de notas.

    const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
    const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
    
    const studentAverage = () => {
      return nameAndAverage = students.map((student, index) => (     // usando o map para criar o objeto(entre parênteses extras)
        {
        name: student,
        average: (grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length), // soma básica do reduce + média
      }
      ));
    }
    console.log(studentAverage());
    
    // const expectedResult = [
    //   { name: 'Pedro Henrique', average: 7.8 },
    //   { name: 'Miguel', average: 9.2 },
    //   { name: 'Maria Clara', average: 8.8 },
    // ];

    // VÍDEO sobre essa resolução, vamos ver se adiciona algo.
    