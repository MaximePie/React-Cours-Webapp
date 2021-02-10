import React from "react";
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import chargement from "./images/chargement.gif";

const breedsUrl = 'https://api.thecatapi.com/v1/breeds';
const searchUrl = 'https://api.thecatapi.com/v1/images/search?limit=9';
const pageNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {

  const [pictures, setPictures] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setLoadingState] = useState(false);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [fileType, setFileType] = useState('');

  useEffect(fetchBreeds, []);
  useEffect(fetchPictures, [currentPage, selectedBreed, fileType]);

  return (
    <div className="App">
      <div className="Types">
        <button onClick={() => setFileType('')}>Les deux</button>
        <button onClick={() => setFileType('png,jpg')}>Photos</button>
        <button onClick={() => setFileType('gif')}>Gifs</button>
      </div>
      <div className="Select">
        <p>Race sélectionnée : {selectedBreed}</p>
        <select name="Breeds" id="Breeds" onChange={handleSelectChange}>
          <option value="">--</option>
          {breeds.map((breed, index) => (
            <option key={index} value={breed.id}>{breed.name}</option>
          ))}
        </select>
      </div>
      {isLoading && <img className="Loading-gif" src={chargement} alt="Loading GIF"/>}
      <div className="Pictures">
        {pictures.map((picture, index) => (
          <img className="Picture" key={index} src={picture.url} alt="Photo d'un chat"/>
        ))}
      </div>
      <div className="Pagination">
        {pageNumbers.map((number, index) => (
          <button className="Button" key={index} onClick={() => setCurrentPage(number)}>{number}</button>
        ))}
      </div>
    </div>
  );

  function handleSelectChange(event) {
    setSelectedBreed(event.target.value);
  }

  /**
   * Récupérer la liste des races de chat
   */
  function fetchBreeds() {
    axios.get(breedsUrl).then(function(response) {
      const breeds = response.data.map((breed) => {
        return {
          id: breed.id,
          name: breed.name
        }
      });
      setBreeds(breeds);
    })
  }

  /**
   * Aller communiquer avec l'API des photos de chats
   */
  function fetchPictures() {
    // https://api.thecatapi.com/v1/images/search?limit=10&page=currentPage
    setLoadingState(true);
    axios.get(`${searchUrl}&page=${currentPage}&breed_ids=${selectedBreed}&mime_types=${fileType}`).then(response => {
      setPictures(response.data);
      setLoadingState(false);
    });
  }
}

export default App;
