// Vamos fazer uma salada de frutas com os itens adicionais que você desejar.

// Faça uma função chamada fruitSalad, passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['creme de leite', 'paçoca', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
  const salad = [...fruit, ...additional];
    return salad;
};

console.log(fruitSalad(specialFruit, additionalItens));