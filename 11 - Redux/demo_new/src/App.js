import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch();
  const stateFromRedux = useSelector(state => state)
  console.log(stateFromRedux);
  return (
    <div className="App">
      <h4>Name : {stateFromRedux.firstname}</h4>
      <label htmlFor="">
        Firstname:
        <input type="text" onChange={handleFirstnameChange}/>
      </label>
    </div>
  );

  function handleFirstnameChange(event) {
    const newName = event.target.value

    dispatch({
      type: "FIRSTNAME_CHANGE",
      data: newName
    })
  }
}

export default App;
