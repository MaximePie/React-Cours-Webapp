const initialState = {
  firstNumber: 0,
  secondNumber: 0,
  results: 0,
};

export default function(state = initialState, action = {}) {

  const intFirstNumber = parseInt(state.firstNumber);
  const intSecondNumber = parseInt(state.secondNumber);

  switch(action.type) {
    case 'ADD':
      return {
        ...initialState,
        results: intFirstNumber + intSecondNumber,
      };

    case 'SUBTRACT':
      return {
        ...initialState,
        results: intFirstNumber - intSecondNumber,
      };

    case 'DIVIDE':
      return {
        ...initialState,
        results: intFirstNumber / intSecondNumber
      };

    case 'MULTIPLY':
      return {
        ...initialState,
        results: intFirstNumber * intSecondNumber,
      };

    case 'RESET':
      return initialState;

    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.fieldName]: action.value, // action.fieldName est soit égal à "firstNumber" ou "lastNumber"
        // action.value est la nouvelle valeur de l'input
      };
    default:
      return initialState
  }
}
