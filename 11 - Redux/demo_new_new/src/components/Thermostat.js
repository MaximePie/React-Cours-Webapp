import {useDispatch} from "react-redux";

export default function Thermostat() {

  const dispatch = useDispatch();

  const temperatureValues = [-5,-4,-3,-2,-1, 1, 2, 3, 4, 5];

  function updateTemperature(amount) {
    dispatch({
      type: "UPDATE",
      data: amount
    })
  }

  return (
    <div className="Thermostat">
      <h5>Thermostat</h5>
      {temperatureValues.map(temperature => (
        <button onClick={() => updateTemperature(temperature)}>{temperature > 0 && '+'} {temperature}°</button>
      ))}

      {/*temperatureValues.map(function (temperature) {
        return <button>{temperature}</button>
      })*/}
    </div>
  )
}