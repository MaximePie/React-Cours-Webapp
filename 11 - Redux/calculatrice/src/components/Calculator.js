import React from 'react';

import {
    useSelector,
    useDispatch
} from 'react-redux';

import Message from './Message';

const Calculator = ({ title }) => {
    const { message, number1, number2, result, type } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { value, name } = e.target;

        if (name === "number1")
            dispatch({
                type: "NUMBER1",
                value: value,
                name: name
            });

        if (name === "number2")
            dispatch({
                type: "NUMBER2",
                value: value,
                name: name
            });
    }

    return (
        <div>
            <h2>{title}</h2>
            <Message 
                message={message} 
            />
            <div>
                <label>
                    Number 1 :
                    </label>
                <input
                    type="text"
                    name="number1"
                    value={number1}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>
                    number 2 :
                    </label>
                <input
                    type="text"
                    name="number2"
                    value={number2}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button
                    disabled={!(number1 !== '' && number2 !== '')}
                    onClick={() => dispatch({ type: "ADDITION" })}
                >
                    Addtion
                </button>
                <button
                    disabled={!(number1 !== '' && number2 !== '')}
                    onClick={() => dispatch({ type: "MULTIPLICATION" })}
                >
                    Multiplication
                </button>
                <button
                    onClick={() => dispatch({ type: "RESET" })}
                >
                    Reset
                </button>
            </div>
         
        </div>
    );
}

export default Calculator;
