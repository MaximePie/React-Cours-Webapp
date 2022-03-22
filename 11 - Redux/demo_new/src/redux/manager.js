// Initial State
const initialState = {
  firstname: "",
  age: 0,
};


export default function (state = initialState, action = {}) {
  console.log(action);

  // Regarder le type de l'action
  // Si l'action est égale = FIRST_NAME_CHANGE
  // Renvoyer le state avec le firstname modifié

  if (action.type === "FIRSTNAME_CHANGE") {
    return {
      ...state,
      firstname: action.data
    }
  }
  return state;
}