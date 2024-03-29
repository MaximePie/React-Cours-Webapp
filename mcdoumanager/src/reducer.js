// Initial state
const initialState = {
  cart: [
    {
      name: "Thon",
      category: "Sandwich",
      unitPrice: 1.5,
      totalPrice: 0,
      quantity: 0,
    },
    {
      name: "Thon",
      category: "Sandwich",
      unitPrice: 1.5,
      totalPrice: 0,
      quantity: 0,
    },
    {
      name: "Thon",
      category: "Sandwich",
      unitPrice: 1.5,
      totalPrice: 0,
      quantity: 0,
    },
    {
      name: "Thon",
      category: "Sandwich",
      unitPrice: 1.5,
      totalPrice: 0,
      quantity: 0,
    },
    {
      name: "Thon",
      category: "Sandwich",
      unitPrice: 1.5,
      totalPrice: 0,
      quantity: 0,
    },
    {
      name: "Thon",
      category: "Sandwich",
      unitPrice: 1.5,
      totalPrice: 0,
      quantity: 0,
    },
    {
      name: "Thon",
      category: "Sandwich",
      unitPrice: 1.5,
      totalPrice: 0,
      quantity: 0,
    },
    {
      name: "Blé",
      category: "Sandwich",
      unitPrice: 2,
      totalPrice: 0,
      quantity: 0,
    },
    {
      name: "Thé bio",
      category: "Boisson",
      unitPrice: 1,
      totalPrice: 0,
      quantity: 0,
    },
    {
      name: "Coca",
      category: "Boisson",
      unitPrice: 3,
      totalPrice: 0,
      quantity: 0,
    },
    {
      name: "Muffin",
      category: "Dessert",
      unitPrice: 15,
      totalPrice: 0,
      quantity: 0,
    },
    {
      name: "Fleurs d'oranger",
      category: "Dessert",
      unitPrice: 50,
      totalPrice: 0,
      quantity: 0,
    },
  ]
};

// Comportement

export default function(state = initialState, action = {}) {

  if (action.type === 'ADD') {
    const cart = [...state.cart];

    const otherProducts = cart.filter(product => product.category !== action.value.category);

    // Isoler le produit à ajouter.
    const targetProducts = cart.filter(product => product.category === action.value.category);
    targetProducts[action.value.index].quantity ++;

    return {
      ...state,
      cart: [
        ...targetProducts,
        ...otherProducts,
      ]
    };
  }

  return state;
}
