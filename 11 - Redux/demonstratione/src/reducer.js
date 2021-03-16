// Source de vérité
const initialState = {
  counter: 50,
};


export default function(state = initialState, action = {}) {

  if (action.type === "ADD") {
    return {
      // counter: state.counter + 1,
      counter: state.counter + action.data,
    };
  }

  if (action.type === "SUBTRACT") {
    return {
      counter: state.counter - action.data,
    }
  }

  return state;
};
