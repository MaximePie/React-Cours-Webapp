// Etat de départ

const initialState = {
  counter: 50,
  nombreDeBananes: 5,
};


export default function (state = initialState, action = {}) {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + action.data,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return initialState;
  }
}
