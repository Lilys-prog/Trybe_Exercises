let listaDePessoasAprovadas = [
  'ada.lovelace@example.com',
  'marie.curie@example.com',
  'margaret.hamilton@example.com',
  'alan.turin@example.com'
];

const enviarEmail = (email) => {
  console.log(`Email para ${email} foi enviado com sucesso!`);
};

// dos 3 parâmetros adicionados, somente o primeiro é obrigatório. Os outros 2 dependem do que vc quer fazer com a função. São {elemento atual - index - array original}

listaDePessoasAprovadas.forEach((item, posicao, array) => {
  enviarEmail(item);
  console.log(`Sua posição é a de: ${posicao}.`);
  console.log(`A quantidade de pessoas no processo seletivo é: ${array.length}.`);
});