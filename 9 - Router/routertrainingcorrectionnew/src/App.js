import './App.css';
import {BrowserRouter, Route, Routes, NavLink, useNavigate, useParams} from "react-router-dom";
import Profil from "./components/pages/Profil";
import PageParametre from "./components/pages/PageParametre";

function Home() {
  return (
    <>
      <div>
        <p>Installer un router sur l'application avec React Router</p>
        <p>Créer une nouvelle route /profil qui va afficher un Composant Profile</p>
        <p>Créer le composant Profile qui va afficher des informations de votre choix</p>
        <p>
          Sur le composant Profile, créer un lien qui permet de revenir à la page précédente
        </p>
      </div>
      <div>
        <p>Créer un route qui redirige vers un paramètre, et qui afficher un composant PageParametre</p>
        <p>Dans le composant PageParamètre, afficher la valeur du paramètre reçu en URL avec useParams</p>
        <p>Utilisation des paramètres ici : <a
          href="https://reactrouter.com/web/example/url-params">https://reactrouter.com/web/example/url-params</a></p>
      </div>
      <div>
        <p>Dans le header du composant App, remplacer les composants Link par des
          <a href="https://reactrouter.com/web/guides/primary-components/navigation-or-route-changers">
            Navigation
          </a>
        </p>
        <p>
          Modifier votre code de manière à ce que le lien du header courant s'affiche en vert.
        </p>
      </div>
      <div>
        <p>Footer</p>
      </div>
    </>
  )
}

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <h4>Router</h4>
        <div>
          <NavLink to={"/profil"}>Profil</NavLink>
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/parametre/1"}>1</NavLink>
          <NavLink to={"/parametre/2"}>2</NavLink>
          <NavLink to={"/parametre/Anaïs"}>Anaïs</NavLink>
        </div>
        <Routes>
          <Route path={"/profil"} element={<Profil/>}/>
          <Route path={"/parametre/:dada"} element={<PageParametre/>}/>
          <Route path={"/home"} element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
