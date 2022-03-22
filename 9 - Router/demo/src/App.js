import './App.css';
import {useNavigate, BrowserRouter, Routes, Route, Link, useParams, NavLink} from "react-router-dom";

function Profile() {

  const {id} = useParams();
  const navigate = useNavigate();

  return (
    <div className="Profile">
      <h3>Profile Page</h3>
      <div>
        <p>Prénom : {id === '1' ? "Yun fei" : "Kevin"}</p>
        <p>Age: 48</p>
        <p>Taille : 250m</p>
      </div>
      <button onClick={goBack}>Retour arrière</button>
      <button onClick={goHome}>Retourner à l'accueil</button>
    </div>
  )

  function goBack() {
    navigate(-1); // Faire retourner d'une page en arrière
  }

  function goHome() {
    navigate('/');
  }
}

function Tasks() {
  const tasksList = ["Manger des mac'n'cheese", "Manger des haricots plats", "Manger"]

  return (
    <div className="Tasks">
      <h3>Tasks list</h3>
      {tasksList.map(task => <p>task</p>)}
    </div>
  )
}

function ShoppingList() {
  const shoppingList = ["Acheter à manger", "à manger", "du houmous"]

  return (
    <div className="Tasks">
      <h3>Shopping list</h3>
      {shoppingList.map(product => <p>{product}</p>)}
    </div>
  )
}


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <NavLink to={"/profil/1"}>Profil1</NavLink>
          <NavLink to={"/profil/2"}>Profil2</NavLink>
          <NavLink to={"/shop"}>Shop</NavLink>
          <NavLink to={"/tasks"}>Tasks</NavLink>
        </div>
        <h2>Router Demonstration</h2>
        <p>Bienvenue, bienvenue, bienvenue !</p>
        <Routes>
          <Route path={"/profil/:id"} element={<Profile/>}/>
          <Route path={"/shop"} element={<ShoppingList/>}/>
          <Route path={"/tasks"} element={<Tasks/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
