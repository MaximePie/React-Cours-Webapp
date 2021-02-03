const initialState = {
  firstNumber: 0,
  secondNumber: 0,
  result: 0,
};

// Créer un pavé numérique

// Conserver l'historique des opérations

// Permettre de faire une série de calculs 2 +54 +5+ +1+4

export default function (state = initialState, action = {}) {
  const secondNumber = parseInt(state.secondNumber);
  const firstNumber = parseInt(state.firstNumber);

  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };

    case 'ADD':
      return {
        ...initialState,
        result: firstNumber + secondNumber,
      }
    case 'SUBTRACT':
      return {
        ...initialState,
        result: firstNumber - secondNumber,
      }
    case 'MULTIPLY':
      return {
        ...initialState,
        result: firstNumber * secondNumber,
      }
    case 'DIVIDE':
      return {
        ...initialState,
        result: firstNumber / secondNumber,
      }
    case 'RESET':
      return initialState

  }

  return state;
}
