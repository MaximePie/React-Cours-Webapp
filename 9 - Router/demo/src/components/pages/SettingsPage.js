import {useNavigate} from "react-router-dom";

export default function SettingsPage() {

  const navigate = useNavigate();

  /**
   * Demander à l'utilisateur une confirmation
   * Rediriger l'utilisateur vers la page d'accueil
   */
  function goBackHome() {
    const isConfirmed = window.confirm("Êtes-vous sûr.e de revenir à la page d'accueil ?")
    if (isConfirmed) {
      navigate('/')
    }
  }

  function goBack() {
    navigate(-1);
  }

  return (
    <div className="SettingsPage">
      <h2>Settings Page</h2>
      <p>Bonjour settings</p>

      <button onClick={goBack}>Retourner en arrière</button>
      <button onClick={goBackHome}>Retourner à l'accueil</button>
    </div>
  )
}