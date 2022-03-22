import UserAge from "./UserAge";
import {useContext} from "react";
import {userAgeContext} from "../../contexts/user"

export default function Profil() {

  const {age} = useContext(userAgeContext);

  return (
    <div>
      <p>Ceci est un profil. Afficher l'âge ici : {age}</p>
      <div>
        <UserAge/>
      </div>
    </div>
  )
}