// source de vérité, qui correspond à la structure du state
const initialState = {
  counter: 0,
};

// Votre reducer de state
export default function(state = initialState, action = {}) {

  switch(action.type) {
    case 'ADD':
      return {
        counter: state.counter + action.number,
      };
    case 'SUBSTRACT':
      return {
        counter: state.counter - action.number,
      };
    default:
      return initialState
  }


  //
  // // le switch travaille avec le dispatch
  // switch (action.type) {
  //   // Gérer l'action de type === 'ADD' ici.
  //   default:
  //     return state;
  // }
}
