const initialState = {
  firstname: '',
  lastname: '',
  age: '',
};

export default function(state = initialState, action = {}) {
  switch(action.type) {

    case 'FIRSTNAME_CHANGE':
      return {
        ...state,
        firstname: action.data
      };
    case 'LASTNAME_CHANGE':
      return {
        ...state,
        lastname: action.data
      };

    case 'AGE_CHANGE':
      return {
        ...state,
        age: action.data,
      };

    case 'RESET':
      return initialState;

    default:
     return state;
  }

}
