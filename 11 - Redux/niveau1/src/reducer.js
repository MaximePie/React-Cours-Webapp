// source de vérité
const initialState = {
  counter: 0,
}

// Votre reducer calculatrice
export default (state = initialState, action = {}) => {

  // le switch travail avec le dispatch
  switch (action.type) {

    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 }

    default:
      return state;
  }
}
