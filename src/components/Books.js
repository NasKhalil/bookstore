import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import AddBookForm from './booksComponent/AddBookForm';
import BooksList from './booksComponent/BooksList';
import { addBook } from '../redux/books/books';

const Books = () => {
  const myBooks = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const addNewBook = (title, author) => {
    const newBook = {
      id: uuid(),
      title,
      author,
    };
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };

  if (myBooks.length) {
    return (
      <div>
        <BooksList />
        <AddBookForm propsToAddBook={addNewBook} />
      </div>
    );
  }
  return (
    <div>
      <h3>There is no book yet</h3>
      <AddBookForm propsToAddBook={addNewBook} />
    </div>
  );
};

export default Books;
