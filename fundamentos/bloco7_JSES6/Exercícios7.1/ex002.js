// constante 'order', que guarda um objeto e dentro dele tem outros objetos
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  // objeto adress
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  // objeto order e fim do objeto address
  order: {
    // objeto pizza
    pizza: {
      // objeto marguerita
      marguerita: {              
        amount: 1,
        price: 25,
      },
      // objeto pepperoni
      pepperoni: {        
        amount: 1,
        price: 20,
      },
    },
    // objeto drinks e fim do objeto pizza
    drinks: {
      // objeto coca
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    }, // objeto delivery e fim do objeto drinks
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  }, // objeto pagamento e fim do objeto delivery
  payment: {
    total: 60,
  },
};
// fim dessa porra gigante de constante 'order'

//==============================================================================

// no gabarito serão usados tantoo brackets quanto pontos, para exemplo
const customerInfo = (order) => {
  const address = 'address';
  // aqui foi o caminho gigantesco entre objetos pra achar a delivery person:
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerName = order['name'];
  const customerPhone = order['phoneNumber'];
  const street = order[address].street;
  const number = order[address].number;
  const apartment = order[address].apartment;

  console.log(`Olá, ${deliveryPerson}, você tem uma entrega para: ${customerName}, telefone: ${customerPhone}, R. ${street}, Nº ${number}, Ap. ${apartment}`);


  // Complete a função customerInfo() para que seu retorno seja similar a 'Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.
};

customerInfo(order);

const orderModifier = (order) => {
  let name = order.name;
  // as pizzas estão dentro do ojeto pizza, então posso pegar só as chaves pra pegar os sabores, não precisa da gambiarra de adicionar a chave sabor dentro dos objetos. Aí é só usar os índices do array capturado.
  const pizzas = Object.keys(order.order.pizza); 
  const coca = order.order.drinks.coke.type;
  const total = 50;

  name = 'Luiz Silva';
  console.log('');
  console.log('======================================================================');
  console.log('');

  console.log(`Olá, ${name}, o total do seu pedido de pizzas ${pizzas[0]}, ${pizzas[1]} e ${coca} é de ${total} reais.`);

  //console.log(`Olá, ${name}, o total do seu pedido de marguerita, pepperoni e coca zero é R$ `);
  // Complete a função orderModifier() para que seu retorno seja similar a 'Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
  // Depois:
  // Modifique o nome da pessoa compradora para Luiz Silva;
  // Modifique o valor total da compra para R$ 50,00.

};

orderModifier(order);

// no gabarito eles construíram a função acima para poder alterar nome e preço, como uma arrowfunction e o Object.keys pra pegar os sabores de pizza, um array. Segue abaixo:
// cria-se duas novas variáveis, pra modificar o nome do cliente e o total das pizzas. O restante é igual à captura feita na função anterior.

            // const orderModifier = (order) => {
            //   const newBuyer = order.name = 'Luiz Silva';
            //   const newTotal = order.payment.total = '50';
            //   const pizzas = Object.keys(order.order.pizza);
            //   const drinks = order.order.drinks.coke.type;

            //   console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`); // Exiba a mensagem desejada utilizando `template literals`
            // }

            // orderModifier(order);