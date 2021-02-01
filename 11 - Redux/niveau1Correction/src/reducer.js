// source de vérité, qui correspond à la structure du state
const initialState = {
  counter: 0,
};

// Votre reducer de state
export default (state = initialState, action = {}) => {

  console.log(action);

  // le switch travaille avec le dispatch
  switch (action.type) {

    case 'INCREMENT':
      return {...state, counter: state.counter + 1};

    case 'DECREMENT':
      return {...state, counter: state.counter - 1};

    case 'RESET':
      return {...state, counter: initialState.counter};

    default:
      return state;
  }
}
