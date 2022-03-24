const initialState = {
  temperature: -8000,
};

export default function (state = initialState, action = {}) {
  switch(action.type) {
    case "UPDATE":
      return {
        ...state,
        temperature: state.temperature + action.data
      };
  }
  return state
}