
const initialState = {
    message: '',
    number1: '',
    number2: '',
    result: 0,
}

const reducer = (state = initialState, action = {}) => {

    switch (action.type) {

        case "NUMBER1":
        case "NUMBER2":

            const { value, name } = action;

            if (value.trim() === '' || isNaN(value)) {

                return {
                    ...state,
                    message: `Pb de saisi ${value} : champ vide ou ce n'est pas un nombre`,
                    [name] : ''
                }
            }

            return {
                ...state,
                [name]: value,
                message: '', type: ""
            }

        case "ADDITION":
            
            return {
                ...state,
                number1: '', number2: '',
                message: `Addition ${state.number1} + ${state.number2}  :\
                 ${Number(state.number1) + Number(state.number2)}`,
            }

        case "MULTIPLICATION":

            return {
                ...state,
                number1: '', number2: '',
                message: `Multiplication ${state.number1} * ${state.number2}  :\
                 ${Number(state.number1) + Number(state.number2)}`,
            }

        case "RESET":

            return {
                ...state,
                ...initialState
            }


        default:
            return state;
    }

}

export default reducer;