import {useDispatch, useSelector} from "react-redux";

export default function Calculator() {

  const {screenContent, result, history} = useSelector(state => state);
  const dispatch = useDispatch();

  const symbols = ['1','2','3','4','5','6','7','8','9', '*', '/', '+', '-'];

  return (
    <div className="Calculator">
      <h4>Calculatrice</h4>
      <div className="Calculator__result">
        <h4>Résultat</h4>
        {result}
      </div>
      <div className="Calculator__display">
        <h4>Cadran</h4>
        {screenContent}
      </div>
      <div className="Calculator__buttons">
        {symbols.map(symbol => (
          <button onClick={() => numberClick(symbol)}>
            {symbol}
          </button>
        ))}
        <button onClick={calculate}>=</button>
        <button onClick={reset}>C</button>
      </div>
      <div className="Calculator__history">
        <h4>Historique</h4>
        {/* Afficher chaque opération présente dans l'historique */}
        {history.map((operation, index) => <p key={index}>{operation}</p>)}
      </div>
    </div>
  );

  function reset() {
    dispatch({
      type: "RESET",
    })
  }

  function calculate() {
    dispatch({
      type: "CALCULATE",
    })
  }

  function numberClick(number) {
    dispatch({
      type: "BUTTON_CLICK",
      content: number,
    })
  }
}