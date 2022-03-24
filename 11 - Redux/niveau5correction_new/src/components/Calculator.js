import {useDispatch, useSelector} from "react-redux";

export default function Calculator() {
  const symbols = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/"];
  const dispatch = useDispatch();

  const {screenContent, result, history} = useSelector(state => state);

  /**
   * Dispatcher un événement ADD_SYMBOl
   * Et envoyer symbol en data
   *
   * @param symbol - Un caractère à ajouter à l'écran
   */
  function addSymbol(symbol) {
    dispatch({
      type: "ADD_SYMBOL",
      symbol
    })
  }

  /**
   * Dispatcher un événement "CALCULATE" au reducer
   */
  function calculate() {
    dispatch({
      type: "CALCULATE"
    })
  }

  /**
   * Dispatch "RESET"
   */
  function reset() {
    dispatch({
      type: "RESET",
    })
  }

  return (
    <div className="Calculator">
      <h4>Voici le Calculator 2022</h4>
      <div className="Calculator__screen">
        {screenContent}
      </div>
      <div className="Calculator__result">
        {result}
      </div>
      <div className="Calculator__buttons">
        {symbols.map(
          (symbol, key) => (
            <button
              onClick={() => addSymbol(symbol)}
              key={key}
            >
              {symbol}
            </button>
          )
        )}
        <button onClick={calculate}>=</button>
        <button onClick={reset}>C</button>
      </div>
      <div className="Calculator__history">
        {history.map((operation, index) => <p key={index}>{operation}</p>)}
      </div>
    </div>
  )
}