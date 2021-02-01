// source de vérité, qui correspond à la structure du state
const initialState = {
  firstname: "",
  lastname: "",
  age: ""
};

// Votre reducer de state
export default (state = initialState, action = {}) => {

  // le switch travaille avec le dispatch
  switch (action.type) {
    // Gérer l'action de type === 'ADD' ici.
    case 'HANDLE_FIRSTNAME_CHANGE':
      return {...state, firstname: action.data};

    case 'HANDLE_LASTNAME_CHANGE':
      return {...state, lastname: action.data};

    case 'HANDLE_AGE_CHANGE':
      return {...state, age: action.data};

    case 'RESET':
      //return {...state, state: initialState};
      return {...initialState};

    default:
      return state;
  }
}
