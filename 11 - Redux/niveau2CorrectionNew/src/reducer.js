// source de vérité, qui correspond à la structure du state
const initialState = {
  counter: 0,
};

// Votre reducer de state
export default (state = initialState, action = {}) => {

  // le switch travaille avec le dispatch
  switch (action.type) {
    // Gérer l'action de type === 'ADD' ici.
    case "ADD": case "SUBTRACT":
      return {
        ...state,
        counter: state.counter + action.number
      }
    default:
      return state;
  }
}
