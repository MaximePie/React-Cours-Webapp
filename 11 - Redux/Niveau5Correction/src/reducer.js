const initialState = {
  symbols: '',
  result: '',
  history: [],
};

export default function (state = initialState, action = {}) {

  switch (action.type) {
    case 'NUMBER_PRESSED':
      return {
        ...state,
        symbols: state.symbols + action.value,
      };

    case 'RESET':
      return initialState;

    case 'ADD_OPERATOR':
      const symbols = state.symbols + action.value;
      return {
        ...state,
        symbols,
      };

    case 'CALCULATE':
      const cadran = state.symbols.split('');
      const operators = ['x', '/', '+', '-'];
      let numbers = cadran.filter(element => !operators.includes(element));
      let operatorsList = cadran.filter(element => operators.includes(element));
      operators.forEach(operator => {
        while(operatorsList.indexOf(operator) !== -1) {
          operate(operator);
        }
      });

      const result = numbers[0];

      const history = [...state.history];
      history.push({
        operations: state.symbols,
        result
      });

      return {
        ...initialState,
        history,
        result,
      };


      /**
       * Appliquer le calcul demandé par l'opérateur en fonction de sa position dans operatorsList
       * @param operator String qui va contenir l'opérateur à appliquer. 'x', '/', '+', '-'
       */
      function operate(operator) {
        const indexOfOperator = operatorsList.indexOf(operator);
        const firstQuantity = parseFloat(numbers[indexOfOperator]);
        const secondQuantity = parseFloat(numbers[indexOfOperator + 1]);
        let resultat;

        switch(operator) {
          case 'x':
            resultat = firstQuantity * secondQuantity;
          break;
          case '/':
            resultat = firstQuantity / secondQuantity;
          break;
          case '+':
            resultat = firstQuantity + secondQuantity;
          break;
          case '-':
            resultat = firstQuantity - secondQuantity;
          break;
        }

        numbers[indexOfOperator] = resultat;
        numbers = [...numbers.filter((number, index) => index !== indexOfOperator + 1)];
        operatorsList = [...operatorsList.filter((operator, index) => index !== indexOfOperator)];
      }
  }

  return state;
}
