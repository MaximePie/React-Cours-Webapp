import {useDispatch} from "react-redux";

export default function Substractor(props) {
  const dispatch = useDispatch();
  /**
   * Dispatcher un événement au réducer
   * en lui envoyant "SUBTRACT" et la valeur "amount"
   * @param number
   */
  function subtract(number) {
    dispatch({
      type: "SUBTRACT",
      number,
    })
  }

  return (
    <div className="Substractor">
      <div>
        <button onClick={() => subtract(-1)}>-1</button>
        <button onClick={() => subtract(-2)}>-2</button>
        <button onClick={() => subtract(-3)}>-3</button>
        <button onClick={() => subtract(-4)}>-4</button>
      </div>
    </div>
  )
}