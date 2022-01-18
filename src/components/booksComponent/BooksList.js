import React from 'react';
import { useSelector } from 'react-redux';
import BooksItem from './BooksItem';

const BooksList = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div>
      <h2>Books list</h2>
      {
        books.map((book) => {
          const { id, title, author } = book;
          return (
            <BooksItem
              key={id}
              title={title}
              author={author}
            />
          );
        })
      }
    </div>
  );
};

export default BooksList;
