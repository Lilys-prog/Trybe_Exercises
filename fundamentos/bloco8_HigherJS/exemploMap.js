const pessoas = ['Joicy', 'Joel', 'Ronald', 'Ana', 'Carol'];

// 1º exemplo: passar todos os nomes para letras maiúsculas

// const novasPessoas = pessoas.map((element) => element.toUpperCase());
// console.log(novasPessoas);
    // a saída é um array idêntico ao inicial, neste caso
    // adicionamos o uppercase pra pôr tudo em letra maiúscula


// fazer um registro de pessoas e empresas como objeto {nome, empresa}. Usando o map (e o mesmo array 'pessoas')

const novasPessoas = pessoas.map((element) => {
  const registro = {};
  registro.nome = element;
  registro.empresa = 'Trybe';
  return registro;
});
console.log(novasPessoas);

// não esquecer de retornar o objeto criado para ser visto fora da função
