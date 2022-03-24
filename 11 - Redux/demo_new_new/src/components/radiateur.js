import {useSelector} from "react-redux";

import Thermostat from "./Thermostat"

export default function Radiateur() {

  const {temperature} = useSelector(state => state)
  return (
    <div className="Radiateur">
      <h4>Radiateur</h4>
      <p>Température actuelle : {temperature}</p>

      <Thermostat/>
    </div>
  )
}