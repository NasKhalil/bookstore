import React from 'react';
import AddBookForm from './booksComponent/AddBookForm';
import BooksList from './booksComponent/BooksList';

const Books = () => (
  <div>
    <BooksList />
    <AddBookForm />
  </div>
);

export default Books;
