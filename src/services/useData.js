export default function useData() {
  const lists = [
    {
      title: "Listinha",
      description: "Lista de compras do mês de outubro de 2021 para o mercado do bairro do bairr e também para outras coisas etc", 
      items: [
        // {
        //   name: "Arroz",
        //   quantity: 1,
        //   in_cart: false,
        //   price: 10.0,
        // },
        // {
        //   name: "Feijão",
        //   quantity: 1,
        //   in_cart: false,
        //   price: 5.0,
        // },
        // {
        //   name: "Macarrão",
        //   quantity: 1,
        //   in_cart: false,
        //   price: 3.0,
        // },
      ],
      cart: [],
    },
    {
      title: "Lista de Natal",
      description: "Presentes de Natal",
      items: [
        {
          name: "Camisa",
          quantity: 1,
          in_cart: false,
          price: 50.0,
        },
        {
          name: "Calça",
          quantity: 1,
          in_cart: false,
          price: 100.0,
        },
        {
          name: "Meias",
          quantity: 1,

          in_cart: false,
          price: 20.0,
        },
      ],
      cart: [],
    },
    {
      title: "Lista de Material",
      description: "Material escolar",
      items: [
        {
          name: "Lápis",
          quantity: 1,
          in_cart: false,
          price: 1.0,
        },

        {
          name: "Borracha",
          quantity: 1,
          in_cart: false,
          price: 1.0,
        },
        {
          name: "Caderno",
          quantity: 1,
          in_cart: false,
          price: 10.0,
        },
      ],
      cart: [],
    },
  ];

  return { lists };
}
