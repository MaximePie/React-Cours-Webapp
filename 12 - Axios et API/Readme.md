--- 

## Axios

### Résumé

[Axios](https://github.com/axios/axios) permet d'échanger des données avec une API. Elle permet de récupérer des données de cette API avec 
`get`, ou bien d'envoyer des données à l'API avec `post`. 

### Installation 

Consulter [cette page](https://www.npmjs.com/package/axios) pour plus d'informations.

Avec NPM : 
`npm install axios`

Avec Yarn :
`yarn add axios`

### Récupérer des données avec get

Structure de base pour récupérer avec `get`. 

```js
axios.get('<URL>').then(function(response){
  console.log(response); // Faire ce qu'on veut ici de notre objet response. 
})
```

`<URL>` correspond à l'url de notre api. 

Exemple : 

```js
axios.get('https://still-crag-05244.herokuapp.com/api/tasks').then(function(response){
  console.log(response); // Faire ce qu'on veut ici de notre objet response. 
})
```

Ici, `/api/tasks` est un `endpoint`. Il permet de spécifier la ressource que l'on veut récupérer dans notre API.
L'endpoint dépend de l'API.


#### Utilisation en React.js

##### Charger des données au lancement de l'application
```js
import './App.css';
import axios from 'axios';
import * as React from "react";

const apiUrl = 'https://cat-fact.herokuapp.com';

function App() {
  const [factsList, setFactsList] = React.useState([]); // factsList va contenir notre lite d'informations. 

  React.useEffect(() => { // On déclare que l'on souhaite déclencher le chargement au lancement de l'application 
    axios
    .get(apiUrl + '/facts') // Déclenche la requête GET sur https://cat-fact.herokuapp.com/facts
    .then(function(resultat) { // Cette fonction est exécutée une fois que la requête est achevée. Resultat contient 
// la réponse de la requête 
      setFactsList(resultat.data);
    });
  }, []);

  console.log(factsList);

  return (
    <div className="App">
      {factsList.map(fact => (
        <div>
          <p>{fact.text}</p>
        </div>
      ))}
    </div>
  );

}
export default App;

```


##### Envoyer des données avec Post 

```js
import axios from "axios";

const myDataToSendToBack = {
  /* Mettre ce que vous voulez envoyer ici */
}

axios({
  url: '<URL>',
  method: 'POST', // Important de préciser la méthode !
  data: myDataToSendToBack
})
```

Exemple avec le gestionnaire de tâches : 

```js

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

```

Vous pouvez consulter l'état de la requête en cherchant dans l'onglet 'Network' de votre navigateur. 

![image](https://user-images.githubusercontent.com/16031936/106894487-55f0e680-66ef-11eb-8570-1db9c48ca1b6.png)

