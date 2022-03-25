import React, {Component, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import {useNavigate, useParams} from "react-router";

export default function UpdateBookInfo(props) {
  const [book, setBook] = useState({});
  const {id: bookId} = useParams();
  const navigate = useNavigate();

  /**
   * Updates the book object with its new value
   * @param event - The new value to set in the book object
   */
  function onChange (event) {
    const initialBook = {...book};
    const updatedBook = {...initialBook, [event.target.name]: event.target.value};
    setBook(updatedBook);
  };

  function onSubmit(event) {
    event.preventDefault();

    axios
      .put('http://localhost:8082/api/books/' + book._id, book)
      .then(() => {
        navigate('/show-book/' + book._id);
      })
      .catch(err => {
        console.log("Error in UpdateBookInfo!");
      })
  };


  useEffect(() => {
    // console.log("Print id: " + props.match.params.id);
    axios
      .get('http://localhost:8082/api/books/'+bookId)
      .then(res => {
        setBook(res.data)
      })
      .catch(err => {
        console.log("Error from UpdateBookInfo");
      })
  }, []);

  const isBookLoaded = book // 👈 null and undefined check
    && Object.keys(book).length !== 0
    && Object.getPrototypeOf(book) === Object.prototype;

  return (
    <div className="UpdateBookInfo">
      {isBookLoaded && (
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show BooK List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Book</h1>
              <p className="lead text-center">
                Update Book's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <label htmlFor="title">Title</label>
                <input
                  type='text'
                  placeholder='Title of the Book'
                  name='title'
                  className='form-control'
                  value={book.title}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <label htmlFor="isbn">ISBN</label>
                <input
                  type='text'
                  placeholder='ISBN'
                  name='isbn'
                  className='form-control'
                  value={book.isbn}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <label htmlFor="author">Author</label>
                <input
                  type='text'
                  placeholder='Author'
                  name='author'
                  className='form-control'
                  value={book.author}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <label htmlFor="description">Description</label>
                <input
                  type='text'
                  placeholder='Describe this book'
                  name='description'
                  className='form-control'
                  value={book.description}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <label htmlFor="published_date">Published Date</label>
                <input
                  type='date'
                  placeholder='published_date'
                  name='published_date'
                  className='form-control'
                  value={book.published_date}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor="publisher">Publisher</label>
                <input
                  type='text'
                  placeholder='Publisher of this Book'
                  name='publisher'
                  className='form-control'
                  value={book.publisher}
                  onChange={onChange}
                />
              </div>

              <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
            </form>
          </div>

        </div>
      )}
    </div>
  );
}
