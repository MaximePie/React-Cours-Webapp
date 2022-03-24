import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/pages/home";
import Profil from "./components/pages/Profil";
import SettingsPage from "./components/pages/SettingsPage";
import Navigation from "./components/molecules/Navigation";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <h1>App</h1>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profil/:username' element={<Profil/>}/>
          <Route path='/settings' element={<SettingsPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
