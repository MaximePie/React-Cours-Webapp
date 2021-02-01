// source de vérité, qui correspond à la structure du state
const initialState = {
  counter: 0,
  baba: "",
};

// Votre reducer de state
export default (state = initialState, action = {}) => {

  // le switch travaille avec le dispatch
  switch (action.type) {
    case 'INCREMENT':
      console.log(action)
      return {...state, counter: state.counter + 1};
    default:
      return state;
  }
}
