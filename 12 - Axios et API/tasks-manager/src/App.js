import './App.css';
import axios from "axios";
import * as React from "react";

const url = 'https://still-crag-05244.herokuapp.com/api/task';
function App() {

  const [tasksList, setTasksList] = React.useState([]);

  const [newTaskName, setNewTaskName] = React.useState('');
  const [newTaskTime, setNewTaskTime] = React.useState('');
  const [newTaskAssignee, setNewTaskAssignee] = React.useState('');

  return (
    <div className="App">

      <div>
        <input
          placeholder="Nom de tâche"
          value={newTaskName}
          type="text"
          onChange={(event) => setNewTaskName(event.target.value)}
        />
        <input
          placeholder="Temps estimé"
          value={newTaskTime}
          type="text"
          onChange={(event) => setNewTaskTime(event.target.value)}
        />
        <input
          placeholder="Responsable"
          value={newTaskAssignee}
          type="text"
          onChange={(event) => setNewTaskAssignee(event.target.value)}
        />
        <button onClick={createTask}>Sauvegarder</button>
      </div>

      <button onClick={fetchTasks}>Chercher les tâches</button>
      {tasksList.map(task => <p>{task.wording}</p>)}
    </div>
  );

  /**
   * Poster une nouvelle tâche
   */
  function createTask() {
    axios({
      url,
      method: 'POST',
      data: {
        wording: newTaskName,
        estimatedTime: newTaskTime,
        assignee: newTaskAssignee,
      }
    }).then(fetchTasks);
  }

  function fetchTasks() {
    axios({
      url,
      method: 'GET',
    }).then(function(results) {
      setTasksList(results.data.tasks);
    })
  }
}

export default App;
