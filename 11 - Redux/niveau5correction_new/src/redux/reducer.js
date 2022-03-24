const initialState = {
  screenContent: "10+10+",
  result: "",
  history: [],
};

export default function (state = initialState, action = {}) {
  switch(action.type) {
    case "ADD_SYMBOL":
      // Si le symbole est un nombre, on l'ajoute
      if (action.symbol >= 0 && action.symbol <= 9) {
        return {
          ...state,
          screenContent: state.screenContent += action.symbol
        }
      }
      // Si le symbole est une opération
      else {
        // On regarde le dernier symbole de l'écran
        const lastSymbol = state.screenContent.substring(state.screenContent.length - 1);

        if (lastSymbol >= 0 && lastSymbol <= 9) {
          // Sinon, on l'ajoute
          return {
            ...state,
            screenContent: state.screenContent += action.symbol
          };
        }
        else {
          // Si c'est un symbole d'opération, on ne fait rien
          return state;
        }
      }
    case "CALCULATE":
      const result = eval(state.screenContent);
      return {
        ...state,
        screenContent: "",
        result,
        history: [...state.history, state.screenContent + " = " + result]
      }

    case "RESET":
      return {
        ...state,
        result: "",
        screenContent: ""
      }
  }

  return state;
}