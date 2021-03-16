const initialState = {
  firstQuantity: 0,
  secondQuantity: 0,
  result: 0,
};

export default function (state = initialState, action = {}) {
  const parsedFirstQuantity = parseFloat(state.firstQuantity);
  const parsedSecondQuantity = parseFloat(state.secondQuantity);

  switch (action.type) {
    case 'UPDATE_FIRST_QUANTITY':
      return {
        ...state,
        firstQuantity: action.data
      };
    case 'UPDATE_SECOND_QUANTITY':
      return {
        ...state,
        secondQuantity: action.data,
      };
    case 'ADD':
      return {
        ...initialState,
        result: parsedFirstQuantity + parsedSecondQuantity
      };
    case 'SUBTRACT':
      return {
        ...initialState,
        result: parsedFirstQuantity - parsedSecondQuantity
      };
    case "MULTIPLY":
      return {
        ...initialState,
        result: parsedFirstQuantity * parsedSecondQuantity
      };
    case "DIVIDE":
      return {
        ...initialState,
        result: parsedFirstQuantity / parsedSecondQuantity
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}
