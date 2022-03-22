import {useContext} from "react";
import {userAgeContext} from "../../contexts/user"

export default function UserAge() {

  const {age, handleAgeChange} = useContext(userAgeContext);

  return (
    <div>
      <p>Voici l'âge de l'utilisateur : {age}</p>
      <label> Age
        <input type="number" onChange={handleChange} value={age}/>
      </label>
    </div>
  );

  function handleChange(event) {
    handleAgeChange(event.target.value)
  }
}
