import {useNavigate} from "react-router-dom";


export default function Profil() {

  const navigate = useNavigate();

  return (
    <div className="Profil">
      <h4>Profil page</h4>
      <p>Apprenant 1 : Kévin</p>
      <p>Apprenant 2 : Sacha</p>
      <button onClick={goBack}>Retour arrière</button>
    </div>
  )

  /**
   * Renvoyer l'utilisateur sur la dernière page
   * visitée
   * Avec useNavigate
   */
  function goBack() {
    navigate(-1)
  }
}