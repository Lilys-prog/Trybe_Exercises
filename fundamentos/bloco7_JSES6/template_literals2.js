// AULA AO VIVO

// template literals: são strings que permitem -embutir- expressões. Pode-se usar múltiplas linhas e interpolação com outras strings.



// exemplo sem template
const assinatura = 'Lily Silva\nTrybe';
console.log(assinatura);
// usando este formato, se houvesse, por exemplo, necessidade de mais de uma linha de espaço entre uma parte e outra, seria necessário usar diversos '\n' seguidos



// exemplo com template
      // const assinTemp = `Lily Silva
      // Trybe`;
      // console.log(assinTemp);
// exibirá o mesmo resultado pois o template é capaz de identificar o uso do 'enter' para quebrar a linha. Inclusive, se quiser mais linhas entre uma sentença e outra é só clicar mais vezes no 'enter'


// um dos usos mais importantes dos template strings é a possibilidade de colocar expressões e/ou variáveis dentro da string sem a necessidade do uso do '+' e ficar abrindo e fechando aspas em cada trecho

const nome = 'João Nasc';
const valor = 1324.56;
const assinTemp = `   Lily Silva
      - Trybe -`;


const email = `Olá, ${nome}

Você está devendo o valor de sua conta de internet do mês passado.
O valor total é de R$ ${valor}.

Solicitamos o pagamento imediato ou quebraremos suas pernas!
`;

console.log(email, assinTemp);