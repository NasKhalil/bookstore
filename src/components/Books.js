import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import AddBookForm from './booksComponent/AddBookForm';
import BooksList from './booksComponent/BooksList';
import { addBook, removeBook } from '../redux/books/books';

const Books = () => {
  const myBooks = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const addNewBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };

  const deleteBook = (id) => dispatch(removeBook(id));

  if (myBooks.length) {
    return (
      <div>
        <BooksList books={myBooks} propsToDeleteBook={deleteBook} />
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
