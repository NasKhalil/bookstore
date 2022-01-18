import React from 'react';
import PropTypes from 'prop-types';
import BooksItem from './BooksItem';

const BooksList = (props) => {
  const { books, propsToDeleteBook } = props;
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
              propsToDeleteBook={propsToDeleteBook}
              id={id}
            />
          );
        })
      }
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  propsToDeleteBook: PropTypes.func.isRequired,
};

export default BooksList;
