
## EventListeners

[Documentation](https://fr.reactjs.org/docs/handling-events.html)

En React, les events listeners se déclarent sous la forme `onEvent`

```js
<button onClick={/*Code à déclencher au clic */}>Cliquez-moi</button>
```

Liste des écouteurs d'événements possibles [ici](https://fr.reactjs.org/docs/events.html#clipboard-events)

### OnClick

Exemple de base de onClick

```js
function Card() {
    return (
      <button onClick={triggerAlert}>Déclencher une alerte</button>
    )

    function triggerAlert() {
        alert("Baba");
    }
}
```

### OnChange

Exemple de base de onChange

[Documentation sur l'objet event](https://fr.reactjs.org/docs/events.html#clipboard-events)

```js
function Card() {
    const [text, setText] = React.useState('');

    return (
      <input onChange={displayContent} value={text}/>
    )

    function displayContent(event) {
      console.log(event)
      console.log(event.target)
      console.log(event.target.value)
      // Effectuer des modifications de state ici 
      setText(event.target.value);
    }
}
```

### Paramètres

Exemples de base sur les paramètres dans les EventsListeners

Envoyer un paramètre à la méthode `deleteNote`
```js
function Card() {
    const [notes, setNotes] = React.useState([]);

    return (
      <div>
        {notes.map((note, index) => (
          <div key={index}>
            {note}
            <button onClick={() => deleteNote(index)}>Supprimer</button>
          </div>
        ))}
      </div>
    )

    function deleteNote(index) {
      console.log("Index " + index);
      // Effectuer des modifications de state ici 
      setNotes([...notes].slice(index, 1));
    }
}
```

Envoyer deux paramètres à la méthode `handleChange`

```js
function Card() {
    const [notes, setNotes] = React.useState([]);

    return (
      <div>
        {notes.map((note, index) => (
          <div key={index}>
            {note}
            <label htmlFor="">
              <input value={note} onChange={(event) => handleChange(event, index)}/>
            </label>
          </div>
        ))}
      </div>
    )

    function handleChange(event, index) {
      console.log("Index " + index);
      console.log("Value " + event.target.value);

      // Effectuer des modifications de state ici 
      const updatedNotes = [...notes];
      updatedNotes[index] = event.target.value;
      setNotes(updatedNotes);
    }
}
```

