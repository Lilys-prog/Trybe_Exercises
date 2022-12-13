const arr = ['Ana', 'Pedro', 'Giovana']
// itera sobre cada elemento, procurando os que satisfazem a condição

            // arr.filter((element, index, array) => console.log('Elemento: ', element, 'Índice: ', index, 'Array: ', array ));   
// só faz mostrar cada elemento

//==================================

              // const filtered = arr.filter((element) => element === 'Ana');
              // console.log(filtered);
// mostra ['Ana']


//======================================================================================================================
//----------------------------------------------------------------------------------------------------------------------
//======================================================================================================================

// usando array de objetos:

const notaEstudantes = [
  {
    nome: 'Joicy',
    nota: 100
  },
  {
    nome: 'Ronald',
    nota: 50
  },
  {
    nome: 'Joel',
    nota: 80
  },
  {
    nome: 'Ana',
    nota: 90
  },
  {
    nome: 'Carol',
    nota: 70
  }
]

// FAZENDO FILTROS

// FILTRO DE QUEM ESTÁ APROVADO (NOTA >= 80)

// o filter é um laço de repetição, como o for

const estudantesComAprovacao = notaEstudantes.filter((pessoa) => pessoa.nota >= 80);
console.log(estudantesComAprovacao);

// o .filter() sempre vai retornar um array que vai ter ou o mesmo número de elementos do original ou menos

