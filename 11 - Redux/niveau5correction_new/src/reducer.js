// Source de vérité = InitialState

const initialState = {
  screenContent: " ", // Le contenu du cadran, les symboles saisis par l'utilisateur
  result: null,
  history: [],
};

// Function, fonctionnement de notre gestionnaire de state

export default function (state = initialState, action = {}) {

  if (action.type === "RESET") {
    // Vider le screen content
    return {
      ...state,
      screenContent: initialState.screenContent,
    }
  }

  if (action.type === "CALCULATE") {
    return {
      ...state,
      screenContent: "",
      result: eval(state.screenContent),
      history: [
        ...state.history,
        state.screenContent + "=" + eval(state.screenContent)
      ]
    }
  }


  if (action.type === "BUTTON_CLICK") {
    // Quand on clique sur un bouton. "BUTTON_CLICK", "ADD_SYMBOL"
    // On ajoute le contenu du bouton au cadran => Modifie le state
    const buttonText = action.content;

    return {
      ...state,
      screenContent: state.screenContent + buttonText
    }
  }

  return state;
}