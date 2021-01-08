# Résumé 

Attention, Avant de poursvuire la lecture, n'oubliez pas de prendre une pause pour consulter ce fichier 
avec les idées claires, parce que vous l'avez bien méritée !


## 8 - Hooks 

### [useState](https://fr.reactjs.org/docs/hooks-state.html)

Remplace le state dans les composants de classe. 

#### La fonction

```React.useState()``` prend en paramètre un état de départ. 

| Type de l'état       | Valeur par défaut conseillée |
|----------------------|------------------------------|
| Chaîne de caractères | ''                           |
| Nombre entier        | 0                            |
| Tableau              | []                           |
| Objet                | {}                           |
| On ne sait pas       | undefined ou null            |


#### Utilisation 

`const [age, setAge] = React.useState(0)`

`age` est l'état. 

`setAge` est la fonction qui met à jour age

`setAge(18)` Modifie le state age pour qu'il soit égal à 18

#### Avec des objets 

```js
const [user, setUser] = React.useState({ 
    age: 0, 
    firstname: ''
})
```

Pour mettre à jour, créer un clone de l'objet avec le [spreadOperator](https://stackoverflow.com/questions/60156883/do-i-need-to-use-the-spread-operator-when-using-usestate-hook-on-object-when-upd)

```js
// Mise à jour de l'âge.
setUser({
    ...user,
    age: 5,
})
```

#### Avec des tableaux 

```js
const [notes, setNotes] = React.useState([])

// Mise à jour du tableau.
setNotes([...notes, 5]); // Ajoute 5 à la liste de notes 
```

### [useEffect](https://fr.reactjs.org/docs/hooks-state.html)

